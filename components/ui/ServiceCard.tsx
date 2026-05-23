type Props = {
  icon: React.ReactNode
  title: string
  desc: string
  index?: number
}

export default function ServiceCard({ icon, title, desc }: Props) {
  return (
    <div className="group relative h-full rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:shadow-xl overflow-hidden">
      {/* Gradient hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-light)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Content */}
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-2xl transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <h3 className="mb-2 font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">{title}</h3>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">{desc}</p>
      </div>
    </div>
  )
}
