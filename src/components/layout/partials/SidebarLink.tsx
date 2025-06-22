'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface SidebarLinkProps {
  href: string
  label: string
  icon: LucideIcon
  onClick?: () => void
}

export default function SidebarLink({ href, label, icon: Icon, onClick }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
    onClick={onClick}
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
        'hover:bg-muted hover:text-foreground',
        isActive
          ? 'bg-muted text-primary dark:bg-neutral-700'
          : 'text-muted-foreground'
      )}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  )
}
