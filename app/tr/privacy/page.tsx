import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: '/tr/gizlilik' },
}

export default function TrPrivacyRedirect() {
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{ __html: "window.location.replace('/tr/gizlilik')" }}
      />
    </div>
  )
}
