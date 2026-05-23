import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://animare.vet'),
  title: {
    default: 'Animare Veteriner Kliniği',
    template: '%s | Animare Veteriner Kliniği',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const lang = headersList.get('x-lang') ?? 'tr'

  return (
    <html lang={lang} className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
