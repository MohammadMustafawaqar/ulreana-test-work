export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { USER_CREDENTIALS } from '@/lib/auth/user'
import { generateToken } from '@/lib/auth/jwt'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  if (username !== USER_CREDENTIALS.username) {
    return NextResponse.json({ message: 'Invalid username' }, { status: 401 })
  }

  const isValid = await bcrypt.compare(password, USER_CREDENTIALS.passwordHash)

  if (!isValid) {
    return NextResponse.json({ message: 'Invalid password' }, { status: 401 })
  }

  const token = await generateToken({ username })

  const response = NextResponse.json({ message: 'Login successful' })

  response.cookies.set('admin_token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 3600,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  })

  return response
}
