"use client"

import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const insuranceTypes = [
  "Auto Insurance",
  "Home Insurance",
  "Life Insurance",
  "Flood Insurance",
  "Business Insurance",
  "Renters Insurance",
  "Workers' Compensation",
  "Other",
]

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim()
    if (!name) return

    setStatus("sending")
    await new Promise((r) => setTimeout(r, 1400))
    setStatus("success")
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
          Name <span className="text-brand-orange" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground
                     text-sm placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent
                     transition-shadow"
        />
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground
                       text-sm placeholder:text-muted-foreground
                       focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent
                       transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(409) 000-0000"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground
                       text-sm placeholder:text-muted-foreground
                       focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent
                       transition-shadow"
          />
        </div>
      </div>

      {/* Insurance type */}
      <div>
        <label htmlFor="type" className="block text-sm font-semibold text-foreground mb-1.5">
          Coverage Type
        </label>
        <select
          id="type"
          name="type"
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground
                     text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange
                     focus:border-transparent transition-shadow appearance-none"
        >
          <option value="">Select a coverage type…</option>
          {insuranceTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your coverage needs…"
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground
                     text-sm placeholder:text-muted-foreground resize-y
                     focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent
                     transition-shadow"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="w-full bg-brand-orange hover:bg-brand-orange-light text-white font-semibold
                   h-11 text-base shadow-md hover:shadow-lg hover:-translate-y-0.5
                   transition-all duration-200 disabled:opacity-70 disabled:translate-y-0"
      >
        {status === "sending" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" aria-hidden="true" />
            Send Message
          </span>
        )}
      </Button>

      {/* Status feedback */}
      {status === "success" && (
        <p role="status" className="flex items-center gap-2 text-sm text-green-700 bg-green-50
                                    border border-green-200 rounded-lg px-4 py-3">
          <CheckCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          Message sent! We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-red-700 bg-red-50
                                   border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  )
}
