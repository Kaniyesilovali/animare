'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Dict = {
  cookie: {
    title: string
    text: string
    accept: string
    privacyLink: string
  }
}

export default function CookieConsent({ lang, dict }: { lang: string; dict: Dict }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-text)] text-white shadow-2xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-1">{dict.cookie.title}</p>
          <p className="text-xs text-white/70 leading-relaxed">
            {dict.cookie.text}{' '}
            <Link
              href={`/${lang}/privacy`}
              className="underline text-white/90 hover:text-white transition-colors"
            >
              {dict.cookie.privacyLink}
            </Link>
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="shrink-0 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          {dict.cookie.accept}
        </button>
      </div>
    </div>
  )
}
