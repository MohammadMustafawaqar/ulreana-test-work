'use client'

import {
  FileText,
  Users,
  Folder,
} from 'lucide-react'
import { usePostsQuery } from '@/lib/queries/posts'
import Card from './Card'

export default function StatsCards() {
  const { data, isLoading } = usePostsQuery()

  const dummyUserCount = 12
  const dummyCategoryCount = 5

  
  const stats = [
    {
      title: 'Total Posts',
      count:  data?.length ?? 0,
      icon: FileText,
      color: 'text-blue-500',
      loading: isLoading,
    },
    {
      title: 'Users',
      count: dummyUserCount,
      icon: Users,
      color: 'text-green-500',
    },
    {
      title: 'Categories',
      count: dummyCategoryCount,
      icon: Folder,
      color: 'text-purple-500',
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, idx) => (
        <Card key={idx} {...stat} />
      ))}
    </div>
  )
}




