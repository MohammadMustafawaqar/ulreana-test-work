import React from 'react'
import StatsCards from '@/components/dashboard/StatsCards'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard'
};

function page() {
  return (
    <div>
      <StatsCards />
    </div>

  )
}

export default page
