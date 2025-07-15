import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with /es
  const isSpanishRoute = pathname.startsWith('/es');
  
  // Get the language from the URL
  const language = isSpanishRoute ? 'es' : 'en';
  
  // Clone the request URL
  const url = request.nextUrl.clone();

  // Set the language in the URL
  if (isSpanishRoute) {
    // Remove the /es prefix for internal routing
    url.pathname = pathname.replace(/^\/es/, '') || '/';
  }

  // Create a response
  const response = NextResponse.rewrite(url);
  
  // Set a cookie to remember the language preference
  response.cookies.set('NEXT_LOCALE', language, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}

export const config = {
  // Match all routes except for assets, api routes, and _next
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
