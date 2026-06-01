import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: '/tr/hakkimizda' },
}

export default function TrAboutRedirect() {
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{ __html: "window.location.replace('/tr/hakkimizda')" }}
      />
    </div>
  )
}
