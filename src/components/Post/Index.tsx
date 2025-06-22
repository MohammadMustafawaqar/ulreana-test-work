'use client'

import React, { useState, useMemo } from 'react'
import { usePostsQuery, useDeletePost } from '@/lib/queries/posts'
import TabularView from './TabularView'
import GridView from './GridView'
import { toast } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Grid, List } from 'lucide-react'
import Link from 'next/link'
import Pagination from '../Pagination'
import { Spinner } from '@/components/ui/spinner'

export default function PostsAdminPage() {
    const { data: posts = [], isLoading, isError } = usePostsQuery()
    const deletePostMutation = useDeletePost()

    const [gridView, setGridView] = useState<boolean>(false)
    const [filter, setFilter] = useState('')
    const [page, setPage] = useState(1)
    const PAGE_SIZE = 10

    const filteredPosts = useMemo(() => {
        if (!filter) return posts
        return posts.filter(
            (post) =>
                post.title.toLowerCase().includes(filter.toLowerCase()) ||
                post.body.toLowerCase().includes(filter.toLowerCase())
        )
    }, [filter, posts])

    const paginatedPosts = useMemo(() => {
        const start = (page - 1) * PAGE_SIZE
        return filteredPosts.slice(start, start + PAGE_SIZE)
    }, [page, filteredPosts])

    const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE)

    async function handleDelete(id: number) {
        if (!confirm('Are you sure you want to delete this post?')) return
        try {
            await deletePostMutation.mutateAsync(id)
            toast.success('Post deleted successfully')
        } catch {
            toast.error('Failed to delete post')
        }
    }

    if (isLoading) return <Spinner size="lg" />
    if (isError) return <p>Error loading posts.</p>

    return (
        <div className='flex flex-col gap-4'>
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <div className="flex items-center justify-between w-full gap-2">
                    <div className='flex gap-2'>
                        <div>
                            <Link href="/admin/posts/create">
                                <Button size={'sm'}>
                                    Create New
                                </Button>
                            </Link>
                        </div>
                        <Button
                            variant={'outline'}
                            size="sm"
                            onClick={() => setGridView(!gridView)}
                        >
                            {
                                gridView ? (
                                    <List />
                                ) : (
                                    <Grid />
                                )
                            }
                        </Button>

                    </div>
                    <Input
                        placeholder="Filter posts..."
                        value={filter}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setFilter(e.target.value)
                            setPage(1)
                        }}
                        className="max-w-sm"
                    />
                </div>
            </header>

            <div>
                {!gridView ? (
                    <TabularView posts={paginatedPosts} onDelete={handleDelete} />
                ) : (
                    <GridView posts={paginatedPosts} onDelete={handleDelete} />
                )}
            </div>

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
                totalItems={filteredPosts.length}
            />
        </div>
    )
}
