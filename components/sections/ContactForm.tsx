'use client'

import { useState } from 'react'
import Link from 'next/link'

type Dict = {
  contact: {
    formTitle: string
    name: string
    phone: string
    email: string
    service: string
    servicePlaceholder: string
    message: string
    messagePlaceholder: string
    submit: string
    submitting: string
    success: string
    services: string[]
  }
  gdpr: {
    consentText: string
    consentLinkText: string
    consentSuffix: string
    consentRequired: string
  }
}

export default function ContactForm({ dict, lang }: { dict: Dict; lang: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [consent, setConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      setConsentError(true)
      return
    }
    setConsentError(false)
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-semibold text-green-800">{dict.contact.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">{dict.contact.formTitle}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            {dict.contact.name}
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
            {dict.contact.phone}
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
          {dict.contact.email}
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
          {dict.contact.service}
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm bg-white outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition"
        >
          <option value="">{dict.contact.servicePlaceholder}</option>
          {dict.contact.services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
          {dict.contact.message}
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={dict.contact.messagePlaceholder}
          className="w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition resize-none"
        />
      </div>

      {/* GDPR Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              if (e.target.checked) setConsentError(false)
            }}
            className="mt-0.5 h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-primary)] shrink-0"
          />
          <span className="text-xs text-[var(--color-muted)] leading-relaxed">
            {dict.gdpr.consentText}{' '}
            <Link
              href={`/${lang}/privacy`}
              className="text-[var(--color-primary)] underline hover:opacity-80 transition-opacity"
              target="_blank"
            >
              {dict.gdpr.consentLinkText}
            </Link>
            {dict.gdpr.consentSuffix}
          </span>
        </label>
        {consentError && (
          <p className="mt-1.5 text-xs text-red-600">{dict.gdpr.consentRequired}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-xl bg-[var(--color-primary)] py-3 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)] disabled:opacity-60 transition-colors"
      >
        {status === 'loading' ? dict.contact.submitting : dict.contact.submit}
      </button>
    </form>
  )
}
