
import axios from 'axios'
import { Post } from '@/lib/types/post'

export async function fetchPosts(): Promise<Post[]> {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
}

export async function createPost(newPost: Omit<Post, 'id'>): Promise<Post> {
  const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
  return res.data
}

export async function updatePost(id: number, data: Omit<Post, 'id'>): Promise<Post> {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
  return res.data
}

export async function deletePost(id: number): Promise<void> {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}


export async function fetchPostsCount(): Promise<number> {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data.length
}

export async function fetchPost(id: number): Promise<Post> {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return data
}

