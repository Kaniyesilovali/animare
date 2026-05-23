'use client'

import { useEffect, useRef, useState } from 'react'
import ServiceCard from '@/components/ui/ServiceCard'
import type { Locale } from '@/app/[lang]/dictionaries'

type Dict = {
  services: {
    title: string
    subtitle: string
    items: {
      exam: { title: string; desc: string }
      vaccine: { title: string; desc: string }
      surgery: { title: string; desc: string }
      dental: { title: string; desc: string }
      radiology: { title: string; desc: string }
      emergency: { title: string; desc: string }
      lab: { title: string; desc: string }
      grooming: { title: string; desc: string }
      nutrition: { title: string; desc: string }
    }
  }
}

const serviceIcons: Record<string, string> = {
  exam: '🩺',
  vaccine: '💉',
  surgery: '🔬',
  dental: '🦷',
  radiology: '📡',
  emergency: '🚨',
  lab: '🧪',
  grooming: '✂️',
  nutrition: '🥗',
}

function AnimatedCard({
  index,
  icon,
  title,
  desc,
}: {
  index: number
  icon: string
  title: string
  desc: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`h-full transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <ServiceCard icon={icon} title={title} desc={desc} />
    </div>
  )
}

export default function ServicesGrid({ dict }: { lang?: Locale; dict: Dict }) {
  const items = Object.entries(dict.services.items) as [
    keyof typeof dict.services.items,
    { title: string; desc: string },
  ][]

  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-600 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            {dict.services.title}
          </h2>
          <p className="mt-3 text-[var(--color-muted)] max-w-xl mx-auto">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([key, item], i) => (
            <AnimatedCard
              key={key}
              index={i}
              icon={serviceIcons[key]}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
