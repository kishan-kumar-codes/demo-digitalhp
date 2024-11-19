import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
    // const path = request.nextUrl.pathname

    // if (path === '/' || path.startsWith('/api/auth') || path === '/sign-in' || path === '/sign-up') {
    //     return NextResponse.next()
    // }

    // const token = await getToken({
    //     req: request,
    //     secret: process.env.NEXTAUTH_SECRET
    // })


    // if (!token) {
    //     return NextResponse.redirect(new URL('/', request.url))
    // }

    // if (token.email === 'kishan.excel2011@gmail.com') {
    //     return NextResponse.next()
    // }

    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (NextAuth routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
    ],
}