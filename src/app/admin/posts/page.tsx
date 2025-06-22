import Posts from '@/components/Post/Index'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts'
};

function page() {
  return (
    <div>
      <Posts />
    </div>
  )
}

export default page
