import type { Faq } from '@/app/lib/blog'

export default function BlogFaq({
  faqs,
  isTr,
}: {
  faqs: Faq[]
  isTr: boolean
}) {
  if (!faqs || faqs.length === 0) return null

  return (
    <section className="py-12 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-6">
          {isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-border)] bg-white px-5 py-4"
            >
              <p className="font-semibold text-[var(--color-text)] mb-2 text-sm sm:text-base">
                {faq.q}
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
