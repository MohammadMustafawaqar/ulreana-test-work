'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import PostCard from '@/components/landing/Post/PostCard'
import { usePostsQuery } from '@/lib/queries/posts'
import Hero from '@/components/landing/layout/Hero'
import { categories } from '@/lib/constant'

export default function Posts() {
  const { data: posts = [], isLoading } = usePostsQuery()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [displayedPosts, setDisplayedPosts] = useState<typeof posts>([])


  const assignRandomCategory = React.useCallback((post: typeof posts[number]): string => {
    if (selectedCategory) return selectedCategory
    return categories[post.id % categories.length]
  }, [selectedCategory])
  
  useEffect(() => {
    
    if (isLoading) return
    if (!selectedCategory) {
      setDisplayedPosts(
        posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
      )
    } else {
      const filteredByCategory = posts.filter(post => assignRandomCategory(post) === selectedCategory)
      const count = Math.min(
        filteredByCategory.length,
        Math.floor(Math.random() * 6) + 10 
      )
      const shuffled = filteredByCategory.sort(() => Math.random() - 0.5)
      const sliced = shuffled.slice(0, count)
      setDisplayedPosts(
        sliced.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
      )
    }
  }, [posts, selectedCategory, search, isLoading, assignRandomCategory])
  return (
    <>
      <Hero />
      <div className="sticky top-15 z-40 py-5 px-12  bg-white dark:bg-neutral-800 flex flex-col sm:flex-row sm:justify-around sm:items-center mb-6 gap-4">

        <div className="flex gap-3 overflow-auto">
          <div className='flex gap-2'>
            <button
              className={`px-4 py-1 rounded-full border ${!selectedCategory
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-transparent text-gray-700 dark:text-gray-300 '
                } transition`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>

            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-1 rounded-full border ${selectedCategory === category
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-transparent text-gray-700 dark:text-gray-300 '
                  } transition`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Input
          type="search"
          placeholder="Search posts..."
          className="max-w-xs"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">


        {isLoading ? (
          <div className="flex justify-center items-center min-h-[40vh]">
            <Spinner size="lg" message="Loading posts..." />
          </div>
        ) : displayedPosts.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-10 text-lg">
            No posts found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

    </>
  )
}

