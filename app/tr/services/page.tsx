import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: '/tr/hizmetler' },
}

export default function TrServicesRedirect() {
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{ __html: "window.location.replace('/tr/hizmetler')" }}
      />
    </div>
  )
}
