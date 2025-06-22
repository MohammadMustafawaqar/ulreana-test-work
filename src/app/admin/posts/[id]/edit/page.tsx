import EditPostPage from '@/components/Post/Edit'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Post'
};

function page() {
  return (
    <div>
      <EditPostPage />
    </div>
  )
}

export default page
