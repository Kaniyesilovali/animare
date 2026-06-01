import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: '/tr/iletisim' },
}

export default function TrContactRedirect() {
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{ __html: "window.location.replace('/tr/iletisim')" }}
      />
    </div>
  )
}
