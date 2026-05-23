type Props = {
  name: string
  role: string
  bio: string
  initials: string
}

export default function TeamCard({ name, role, bio, initials }: Props) {
  return (
    <div className="flex flex-col items-center text-center rounded-2xl border border-[var(--color-border)] bg-white p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-2xl font-bold">
        {initials}
      </div>
      <h3 className="font-semibold text-[var(--color-text)]">{name}</h3>
      <p className="text-sm text-[var(--color-primary)] font-medium mb-2">{role}</p>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">{bio}</p>
    </div>
  )
}
