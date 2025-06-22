'use client'

import { Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Crumb from './Crumbs'

type Crumb = { href: string; label: string }
type Props = {
  breadcrumbs?: Crumb[]
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function Breadcrumb({ breadcrumbs }: Props) {
  const pathname = usePathname() || '/'
  const segments = pathname.split('/').filter(Boolean)

  const defaultCrumbs: Crumb[] = segments.map((seg, idx) => ({
    href: '/' + segments.slice(0, idx + 1).join('/'),
    label: capitalizeFirstLetter(seg.replace(/-/g, ' '))
  }))

  const crumbs = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : defaultCrumbs

  const pageTitle = crumbs.length
    ? crumbs[crumbs.length - 1].label
    : 'Dashboard'


  return (
    <div className="flex justify-between items-center bg-white dark:bg-neutral-800 shadow select-none">
      <div className="mx-3">
        <h3 className="text-xl font-bold">{pageTitle}</h3>
      </div>
      <nav aria-label="Breadcrumb" role="navigation">
        <ol className="flex items-center space-x-2 text-sm font-medium p-3">
          <li>
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition">
              <Home className="w-4 h-4 mx-2 text-gray-400" />
              Home
            </Link>
          </li>

          {crumbs.map(({ href, label }, index) => {
            const isLast = index === crumbs.length - 1
            return <Crumb key={href} href={href} label={label} isLast={isLast} />
          })}
        </ol>
      </nav>
    </div>
  )
}
