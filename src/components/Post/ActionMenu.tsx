'use client'

import { Edit2Icon, MoreVertical, Trash } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export default function ActionMenu({
  postId,
  onDelete,
}: {
  postId: number
  onDelete: (id: number) => void
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-32 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-md shadow-lg z-50"
          align="start"
          side="bottom"
        >
          <DropdownMenu.Label className="px-4 py-2 text-sm text-gray-900 dark:text-white">Actions</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Link
              href={`/admin/posts/${postId}/edit`}
              className="cursor-pointer w-full text-left px-4 py-2 hover:bg-green-100 dark:hover:bg-green-900 text-green-600 dark:text-green-400 flex items-center"
            >
              <Edit2Icon className="w-4 h-4 inline mr-2" />
              Edit
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <button
              onClick={() => onDelete(postId)}
              className="cursor-pointer w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400 flex items-center"
            >
              <Trash className="w-4 h-4 inline mr-2" />
              Delete
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
