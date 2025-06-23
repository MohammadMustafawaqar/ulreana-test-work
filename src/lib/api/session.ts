'use server'

import { cookies as getCookies } from 'next/headers'

export async function setAuthCookie(token: string) {
  const cookies = await getCookies()
  return cookies.set('admin_token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60, 
  })
}

export async function clearAuthCookie() {
  const cookies = await getCookies()
  cookies.delete('admin_token')
}

export async function getTokenFromCookies() {
  const cookies = await getCookies()
  return cookies.get('admin_token')?.value
}

export async function isAuthenticated() {
  const token = await getTokenFromCookies()
  return !!token
}