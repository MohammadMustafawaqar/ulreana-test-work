'use client'

import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'

import { Post } from '@/lib/types/post'
import ActionMenu from './ActionMenu'

interface PostsGridProps {
  posts: Post[]
  onDelete: (id: number) => void
}

export default function PostsGrid({ posts, onDelete }: PostsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex justify-between">
            <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
            <div>
              <ActionMenu postId={post.id} onDelete={onDelete} />
            </div>
            </div>
          </CardHeader>
          <CardContent className="line-clamp-3">{post.body}</CardContent>
         </Card>
      ))}
    </div>
  )
}
