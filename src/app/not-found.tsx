'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Ghost } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <Ghost className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-muted-foreground">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="default">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
