import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  fetchPosts,
  createPost,
  deletePost,
  updatePost,
  fetchPost,
} from '@/lib/api/posts'
import { Post } from '@/lib/types/post'

export function usePostsQuery() {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      const existingPosts = queryClient.getQueryData<Post[]>(['posts']) || [];
      queryClient.setQueryData<Post[]>(['posts'], [
        ...existingPosts,
        { ...newPost, id: Date.now(), created_at: new Date() },
      ]);
    },
  });
}

  export function useDeletePost() {
    const queryClient = useQueryClient()
  
    return useMutation({
      mutationFn: async (id: number) => {
        await deletePost(id)  
        return id             
      },
      onSuccess: (deletedId) => {
        queryClient.setQueryData<Post[]>(['posts'], (oldPosts = []) =>
          oldPosts.filter((post) => post.id !== deletedId)
        )
      },
    })
  }

export function useUpdatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Omit<Post, 'id'> }) =>
      updatePost(id, data),

    onSuccess: (updatedPost) => {
      const oldPosts = queryClient.getQueryData<Post[]>(['posts']) || []

      const newPosts = oldPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )

      queryClient.setQueryData(['posts'], newPosts)
    },
  })
}


export function usePostQuery(id: number) {
  return useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id),
    enabled: !!id, 
    refetchOnWindowFocus: false,
  })
}


