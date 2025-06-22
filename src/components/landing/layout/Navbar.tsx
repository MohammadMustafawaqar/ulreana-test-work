'use client'

import Link from 'next/link'
import { ThemeToggle } from '../../ThemeToggle'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-neutral-50">
          <Link href="/">Posts</Link>
        </h1>
        <div className='flex gap-2'>
          <ThemeToggle />
          <ul className="flex align-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <li className='py-2'>
              <Link href="/admin/">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
