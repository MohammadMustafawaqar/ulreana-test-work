import CreatePostPage from '@/components/Post/Create'
import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Post'
};

function page() {
  return (
    <div>
      <CreatePostPage />
    </div>
  )
}

export default page
