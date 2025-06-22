'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type CrumbProps = {
    href: string
    label: string
    isLast: boolean
}

export default function Crumb({ href, label, isLast }: CrumbProps) {
    return (
        <li className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            {isLast ? (
                <span
                    aria-current="page"
                    style={{
                        maxWidth: '150px',
                    }}
                    className="text-gray-900 dark:text-white capitalize truncate"
                >
                    {label}
                </span>
            ) : (
                <Link
                    href={href}
                    className="hover:text-gray-800 dark:hover:text-gray-400 capitalize transition"
                >
                    {label}
                </Link>
            )}
        </li>
    )
}
