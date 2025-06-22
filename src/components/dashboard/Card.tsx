'use client'

import CountUp from 'react-countup'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { StatCardProps } from '@/lib/types/types'
import { Spinner } from '@/components/ui/spinner'

export default function StatCard({
  title,
  count,
  icon: Icon,
  color,
  loading,
}: StatCardProps) {
  return (
    <Card className="relative overflow-hidden shadow-md transition hover:shadow-lg">
      <CardHeader className="flex items-center justify-between space-y-0  relative z-10">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 pr-6">
        {loading ? (
          <Spinner size="md" message="" />
        ) : (
          <div className="text-2xl font-bold relative z-10">
            <CountUp end={count} duration={1} separator="," />
          </div>
        )}
      </CardContent>

      <Icon
        className={`pointer-events-none absolute top-0 right-0 h-full py-3 w-1/2 opacity-10 ${color}`}
        style={{ fontSize: '3.6rem'}}
        aria-hidden="true"
      />
    </Card>
  )
}
