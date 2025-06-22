'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'react-hot-toast'
import { usePostsQuery, useUpdatePost } from '@/lib/queries/posts'
import TinyEditor from '../Editor'
import Link from 'next/link'
import { Post } from '@/lib/types/post'


export default function EditPostPage() {
    const { id } = useParams()
    const router = useRouter()
    const postId = parseInt(id as string, 10)

    const { data: posts = [] } = usePostsQuery()
    const updatePost = useUpdatePost()

    const post = posts.find((p) => p.id === postId)

    const { register, handleSubmit, setValue, watch, formState } = useForm<Post>({
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
        },
    })

    useEffect(() => {
        if (post) {
            setValue('title', post.title)
            setValue('body', post.body)
        }
    }, [post, setValue])

    useEffect(() => {
        register('body', { required: 'Body is required' })
    }, [register])

    const onSubmit = (data: Post) => {
        updatePost.mutate(
            {
                id: postId,
                data,
            },
            {
                onSuccess: () => {
                    toast.success('Post updated successfully')
                    router.push('/admin/posts')
                },
                onError: () => {
                    toast.error('Failed to update post')
                },
            }
        )
    }

    if (!post) return <p className="text-center">Post not found.</p>

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Edit Post</h2>
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
                    <Button type="submit" disabled={updatePost.isPending}>
                        {updatePost.isPending ? 'Saving...' : 'Update Post'}
                    </Button>
                </div>
            </form>
        </div>
    )
}
