"use client"

import { useState, useEffect } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-blue shadow-lg py-3"
          : "bg-brand-blue/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center shadow-md">
            <Shield className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <span className="block text-white font-semibold text-base tracking-tight">
              Lumpkin&apos;s
            </span>
            <span className="block text-brand-orange-pale text-[10px] uppercase tracking-widest">
              Insurance Agency
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-md
                         hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="ml-3 bg-brand-orange hover:bg-brand-orange-light text-white
                       shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-blue border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-base font-medium py-2 px-3
                         rounded-md hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-2 w-full bg-brand-orange hover:bg-brand-orange-light text-white"
          >
            <a href="#contact" onClick={() => setOpen(false)}>
              Get a Free Quote
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
