import ShowPost from '@/components/landing/Post/ShowPost'
import { fetchPost } from '@/lib/api/posts';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const post = await fetchPost(Number(resolvedParams.id));
  return {
    title: post.title,
    description: post.body,
  };
}

async function page({
  params
}: {
  params: Promise<{id: string}>
}) {
  const resolvedParams = await params
  return (
    <div>
      <ShowPost post_id={Number(resolvedParams.id)}/>
    </div>
  )
}

export default page
