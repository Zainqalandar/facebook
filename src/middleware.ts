import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const Path = request.nextUrl.pathname
    const token = request.cookies.get('token')?.value || ''

    console.log('tokendfddfdfd', token)
  const publicPath = Path === '/signup' || Path === '/signin' || Path === "/verifyemail"

  if (publicPath && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!publicPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}
 
export const config = {
  matcher: ['/', '/signup', '/signin', '/verifyemail']
}