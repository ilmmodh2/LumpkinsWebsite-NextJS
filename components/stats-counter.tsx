"use client"

import { useEffect, useRef, useState } from "react"

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
}

export function StatsCounter({ value, suffix = "", label }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * value))
      if (p < 1) requestAnimationFrame(tick)
      else setCount(value)
    }
    requestAnimationFrame(tick)
  }, [visible, value])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-5xl font-bold text-white tabular-nums">
        {count.toLocaleString()}
        <span className="text-brand-orange-pale">{suffix}</span>
      </span>
      <span className="text-white/55 text-xs uppercase tracking-widest font-semibold">{label}</span>
    </div>
  )
}
