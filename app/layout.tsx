import type { Metadata } from 'next'
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
  verification: {
    google: 'qJoDuO3x6a1DWCCdc8CKi7xcLZXHYLWmM1PRrIqcAVU',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
