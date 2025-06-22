'use client'

import React from 'react'
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table'


import { Post } from '@/lib/types/post'
import TruncatedTooltip from '../TruncatedTooltip'
import ActionMenu from './ActionMenu'

interface PostsTableProps {
    posts: Post[]
    onDelete: (id: number) => void
}

export default function PostsTable({ posts, onDelete }: PostsTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Body</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell >
                            <TruncatedTooltip content={post.title} width={'300px'} />
                        </TableCell>
                        <TableCell>
                            <TruncatedTooltip content={post.body} width={'600px'} />
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                            <div>
                                <ActionMenu postId={post.id} onDelete={onDelete} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
