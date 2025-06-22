'use client'

import { usePostQuery, usePostsQuery } from '@/lib/queries/posts'
import {  useRouter } from 'next/navigation'
import Link from 'next/link'
import PostCard from '@/components/landing/Post/PostCard'
import Crumb from '@/components/Crumbs'
import { HomeIcon } from 'lucide-react'
import { Spinner } from '@/components/ui/spinner'
import PostDetails from '@/components/landing/Post/PostDetails'
import { getImageUrl } from '@/lib/utils'
import { categories } from '@/lib/constant'
import dayjs from 'dayjs'

export default function ShowPost({post_id}: {post_id: number}) {
  const router = useRouter()
  const id = Number(post_id)

  const { data: post, isLoading, error } = usePostQuery(id)
  const { data: allPosts = [] } = usePostsQuery()


  const author = {
    name: 'John Doe',
    avatarUrl: `https://i.pravatar.cc/150?img=12`,
  }
  const dummyDate = new Date(2023, 6, 15)
  const formattedDate = dayjs(dummyDate).format('MMMM dd, yyyy')
  const category = categories[id % categories.length]

  const relatedPosts = allPosts
    .filter(p => p.id !== id)
    .slice(0, 10)
    .slice(0, 4)


  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <Spinner size='md' />
    </div>
  )

  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-red-600 text-lg">Failed to load post.</p>
    </div>
  )

  if (!post) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-gray-500 text-lg">Post not found.</p>
    </div>
  )

  const crumbs: { href: string; label: string, isLast?: boolean }[] = [
    { href: '/', label: 'Posts' },
    { href: '', label: post.title, isLast: true },
  ]

  return (
    <main className="max-w-7xl mx-auto p-6 sm:p-12  mt-12 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">

      <aside className="sticky top-20 self-start border-r  dark:border-gray-700 pr-6 hidden lg:block">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Categories</h2>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat}>
              <button
                onClick={() => {
                  const catIndex = categories.indexOf(cat)
                  const targetPost = allPosts.find(p => (p.id % categories.length) === catIndex)
                  if (targetPost) router.push(`/posts/${targetPost.id}`)
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition ${cat === category ? 'bg-indigo-600 text-white' : 'text-gray-800 dark:text-gray-300'
                  }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <article>
     
      <nav aria-label="Breadcrumb" role="navigation">
        <ol className="flex items-center space-x-2 text-sm font-medium p-3">
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              <HomeIcon className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
              Home
            </Link>
          </li>
          {crumbs.map(({ href, label }, i) => (
            <Crumb
              key={i}
              href={href}
              label={label}
              isLast={i === crumbs.length - 1}
            />
          ))}
        </ol>
      </nav>

        <PostDetails
          title={post.title}
          heroImageUrl={getImageUrl(id)}
          author={author}
          formattedDate={formattedDate}
          category={category}
          body={post.body}
        />

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map(rp => (
              <PostCard key={rp.id} post={rp} />
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
