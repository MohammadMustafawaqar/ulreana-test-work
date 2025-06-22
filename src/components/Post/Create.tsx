'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { useCreatePost } from '@/lib/queries/posts'
import TinyEditor from '../Editor'
import Link from 'next/link'

type FormData = {
  title: string
  body: string
}

export default function CreatePostPage() {
  const { register, handleSubmit, setValue, watch, formState } = useForm<FormData>()

  React.useEffect(() => {
    register('title', { required: 'Title is required' })
    register('body', { required: 'Body is required' })
  }, [register])

  const router = useRouter()
  const createPost = useCreatePost()

  const onSubmit = (data: FormData) => {
    createPost.mutate(
      {
        title: data.title,
        body: data.body,
        created_at: new Date(), 
      },
      {
        onSuccess: () => {
          toast.success('Post created successfully')
          router.push('/admin/posts')
        },
        onError: () => {
          toast.error('Failed to create post')
        },
      }
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Create New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Post title..."
            {...register('title', { required: 'Title is required' })}
          />
          {formState.errors.title && (
            <p className="text-red-600 text-sm mt-1">{formState.errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="body">Body</Label>
          <TinyEditor
            value={watch('body') || ''}
            onChange={(content) => setValue('body', content, { shouldValidate: true })}
          />
          {formState.errors.body && (
            <p className="text-red-600 text-sm mt-1">{formState.errors.body.message}</p>
          )}
        </div>
        <div className='flex justify-between'>
          <Link href="/admin/posts" className="text-sm font-medium rounded-md bg-red-600 hover:bg-red-500 text-white px-5 py-2">Cancel</Link>
          <Button type="submit" disabled={createPost.isPending}>
            {createPost.isPending ? 'Saving...' : 'Create Post'}
          </Button>
        </div>


      </form>
    </div>
  )
}
