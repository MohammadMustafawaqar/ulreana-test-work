'use server'

import { cookies as getCookies } from 'next/headers'

export async function setAuthCookie(token: string) {
  const cookies = await getCookies()
  cookies.set('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60, 
  })
}

export async function clearAuthCookie() {
  const cookies = await getCookies()
  cookies.delete('token')
}

export async function getTokenFromCookies() {
  const cookies = await getCookies()
  return cookies.get('token')?.value
}

export async function isAuthenticated() {
  const token = await getTokenFromCookies()
  return !!token
}