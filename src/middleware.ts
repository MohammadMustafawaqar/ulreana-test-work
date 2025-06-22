import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth/jwt';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value
  console.log(token);
  const url = request.nextUrl.clone()

  if (url.pathname.startsWith('/admin')) {
    if (!token || !verifyToken(token)) {
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
