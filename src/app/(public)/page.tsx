import Posts from '@/components/landing/Post/Posts'
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
