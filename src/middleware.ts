import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('token')?.value
  const unprotectedRoutes=['/auth','/']

  // console.log(currentUser,request.nextUrl.pathname)
 
//   if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
//     return Response.redirect(new URL('/dashboard', request.url))
//   }
 
  if (currentUser && request.nextUrl.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/', request.url))
  }

  if(!currentUser && !unprotectedRoutes.includes(request.nextUrl.pathname)){
    return Response.redirect(new URL('/auth',request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)',
    // '/auth','/','/dashboard','/customers','/products','/orders'
  ],
}