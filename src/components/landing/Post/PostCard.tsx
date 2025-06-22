'use client'

import { useRef } from 'react'
import { cn, getImageUrl, pickRandom } from '@/lib/utils'
import dayjs from 'dayjs'
import {  useRouter } from 'next/navigation'
import { dummyAuthors } from '@/lib/constant'
import BodyRenderer from '../../BodyRenderer'
import Image from 'next/image'

type Post = {
  id: number
  title: string
  body: string
  createdAt?: string
}



const categories = ['Tech', 'Design', 'Science', 'Health', 'Business']


export default function PostCard({ post }: { post: Post }) {
  const ref = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const author = pickRandom(dummyAuthors, post.id)
  const category = pickRandom(categories, post.id + 3)
  const fallbackDate = dayjs('2025-04-12').toISOString()

  const createdAt = post.createdAt && dayjs(post.createdAt).isValid()
    ? post.createdAt
    : fallbackDate
    
  const formattedDate = dayjs(createdAt).format('MMM D, YYYY')

  return (
    <article
      ref={ref}
      className={cn(
        'flex flex-col rounded-xl bg-white dark:bg-gray-900 shadow-md transition duration-300 ease-in-out',
        'hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-300/40 dark:hover:shadow-indigo-700/50',
        'focus:outline-none focus:ring-2 focus:ring-indigo-500',
        'cursor-pointer'
      )}
      tabIndex={0}
      aria-label={post.title}
      onClick={() => router.push(`/posts/${post.id}`)}
     
    >
      <div className="overflow-hidden rounded-t-xl h-48" >
        <Image
          width={200}
          height={100}
          src={getImageUrl(post.id)}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="px-6 py-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 transition-colors duration-300 ease-in-out group-hover:text-indigo-600">
          {post.title}
        </h2>
        <div className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 flex-grow">
          
          <BodyRenderer body={post.body} />
        </div>
      </div>

      <div className="px-6 pb-4 space-y-2">
        <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide">
          <span className="uppercase bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full select-none">
            {category}
          </span>
          <time dateTime={createdAt} className="italic select-none">
            {formattedDate}
          </time>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <Image
            height={100}
            width={200}
            src={author.avatar}
            alt={author.name}
            className="w-9 h-9 rounded-full object-cover"
            loading="lazy"
          />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100 select-none">
            {author.name}
          </span>
        </div>
      </div>
    </article>
  )
}
