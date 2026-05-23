import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['tr', 'en']
const defaultLocale = 'tr'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') ?? 'tr'
  const headers = { 'accept-language': acceptLanguage }
  const languages = new Negotiator({ headers }).languages()
  try {
    return match(languages, locales, defaultLocale)
  } catch {
    return defaultLocale
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const resolvedLocale = pathnameHasLocale
    ? (locales.find((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`) ?? defaultLocale)
    : getLocale(request)

  if (pathnameHasLocale) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-lang', resolvedLocale)
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  request.nextUrl.pathname = `/${resolvedLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:jpg|jpeg|png|svg|gif|webp|ico|css|js|woff2?|ttf|eot)).*)'],
}
