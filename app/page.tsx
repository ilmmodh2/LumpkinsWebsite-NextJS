import { Hero } from "@/components/ui/hero-1"
import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"
import { StatsCounter } from "@/components/stats-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Car, Home, Heart, Waves, Building2, Briefcase, Package, HardHat,
  Phone, Mail, MapPin, Clock, Star, CheckCircle, Shield, Users, Award,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/* ─── Data ──────────────────────────────────────────── */
const personalServices = [
  {
    icon: Car,
    title: "Auto Insurance",
    desc: "Custom coverage for your vehicle — liability, collision, comprehensive, and more.",
    bullets: ["Liability Protection", "Collision Coverage", "Comprehensive Plans", "Uninsured Motorist"],
  },
  {
    icon: Home,
    title: "Home Insurance",
    desc: "Protect your home and belongings with reliable, affordable coverage.",
    bullets: ["Dwelling Protection", "Personal Property", "Liability Coverage", "Additional Living Expenses"],
  },
  {
    icon: Heart,
    title: "Life Insurance",
    desc: "Secure your family's future. Quick online applications with instant approvals.",
    bullets: ["Term Life", "Whole Life", "Instant Online Approval", "Competitive Rates"],
  },
  {
    icon: Waves,
    title: "Flood Insurance",
    desc: "Standard policies don't cover floods. Don't get caught off guard.",
    bullets: ["Structure Coverage", "Contents Coverage", "All Risk Zones", "Renters Available"],
  },
  {
    icon: Building2,
    title: "Renters Insurance",
    desc: "Affordable protection for your belongings, even if you don't own your home.",
    bullets: ["Personal Property", "Liability Protection", "Loss of Use", "Affordable Rates"],
  },
  {
    icon: Shield,
    title: "More Coverage",
    desc: "Motorcycle, mobile home, boat, RV, windstorm & hail, and health insurance.",
    bullets: ["Motorcycle & Toys", "Mobile Home", "Boats & RVs", "Health & Windstorm"],
  },
]

const businessServices = [
  {
    icon: Shield,
    title: "General Liability",
    desc: "Protect your business from third-party claims, injuries, and property damage.",
    bullets: ["Bodily Injury", "Property Damage", "Legal Defense", "Advertising Injury"],
  },
  {
    icon: Briefcase,
    title: "Commercial Property",
    desc: "Safeguard your building, equipment, and inventory from damage or loss.",
    bullets: ["Building Coverage", "Equipment & Inventory", "Business Interruption", "Fire & Theft"],
  },
  {
    icon: Package,
    title: "Business Owners Policy",
    desc: "A bundled BOP combining liability and property — great value for small businesses.",
    bullets: ["Liability + Property", "Business Interruption", "Bundled Savings", "Flexible Options"],
  },
  {
    icon: HardHat,
    title: "Workers' Compensation",
    desc: "Protect your employees and your business when workplace injuries happen.",
    bullets: ["Medical Expenses", "Lost Wages", "Employer Liability", "State Compliant"],
  },
]

const testimonials = [
  {
    name: "Maria G.",
    text: "Tracey and her team made getting insurance so simple. They found me a better rate and walked me through everything step by step.",
    stars: 5,
  },
  {
    name: "James T.",
    text: "I've been with Lumpkin's for over 10 years. They always go above and beyond — especially at renewal time.",
    stars: 5,
  },
  {
    name: "Sandra K.",
    text: "After my flood claim, they were there for me the whole way through. Couldn't ask for better advocates.",
    stars: 5,
  },
]

/* ─── Page ──────────────────────────────────────────── */
export default function LumpkinsPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <Hero
        eyebrow="Serving Beaumont, TX Since 1992"
        title="Your Trusted Texas Insurance Partner"
        subtitle="40+ years of experience · 600+ carriers · Personalized coverage for every Texan."
        ctaLabel="Get a Free Quote"
        ctaHref="#contact"
      />

      {/* ── Stats Bar ── */}
      <section className="bg-brand-blue py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <StatsCounter value={34} suffix="+" label="Years in Business" />
            <StatsCounter value={600} suffix="+" label="Insurance Carriers" />
            <StatsCounter value={4000} suffix="+" label="Satisfied Clients" />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-blue tracking-tight mb-4">
              Insurance Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Comprehensive coverage tailored to your needs — from personal to business.
            </p>
          </ScrollReveal>

          {/* Personal */}
          <div className="mb-16">
            <ScrollReveal className="from-left mb-8">
              <h3 className="text-2xl font-semibold text-brand-blue border-b-2 border-brand-orange inline-block pb-2">
                Personal Insurance
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalServices.map((s, i) => (
                <ServiceCard key={s.title} {...s} delay={i % 3} />
              ))}
            </div>
          </div>

          {/* Business */}
          <div>
            <ScrollReveal className="from-right mb-8">
              <h3 className="text-2xl font-semibold text-brand-blue border-b-2 border-brand-orange inline-block pb-2">
                Business Insurance
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessServices.map((s, i) => (
                <ServiceCard key={s.title} {...s} delay={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <ScrollReveal className="from-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-brand-blue tracking-tight mb-6">
                Serving Beaumont Since 1992
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Founded by Tracey Lumpkin, Lumpkin&apos;s Insurance Agency has been a trusted name in
                Beaumont, TX for over 34 years. As an independent agency, we work for{" "}
                <em className="text-brand-blue not-italic font-semibold">you</em> — not the insurance companies.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                We shop hundreds of top-rated carriers to find the best rates and coverage for your
                unique situation, and we review your policy at every renewal to ensure you&apos;re always
                getting the best value.
              </p>
              {/* Golden Rule */}
              <blockquote className="border-l-4 border-brand-orange pl-5 py-2 bg-orange-50 rounded-r-lg">
                <p className="text-brand-blue font-semibold text-lg italic">
                  &ldquo;Do unto others as you would have them do unto you.&rdquo;
                </p>
                <cite className="text-xs text-brand-orange uppercase tracking-widest font-bold mt-2 block not-italic">
                  — Our Core Belief
                </cite>
              </blockquote>
            </ScrollReveal>

            {/* Card */}
            <ScrollReveal className="from-right">
              <div className="bg-brand-blue rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white/10">
                    <span className="text-5xl font-bold text-brand-orange-pale">1992</span>
                    <span className="text-white/70 text-sm leading-snug">
                      Established in<br />Beaumont, TX
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Licensed & Experienced Agents",
                      "600+ Insurance Carriers",
                      "Annual Policy Reviews",
                      "White-Glove Customer Service",
                      "Fast, Clear Quotes",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                        <CheckCircle className="w-4 h-4 text-brand-orange-pale shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 pt-6 border-t border-white/10 text-sm text-white/70">
                    <Clock className="w-5 h-5 shrink-0 text-brand-orange-pale" aria-hidden="true" />
                    <span>
                      <strong className="text-white">Mon – Fri:</strong> 9:00 AM – 5:00 PM &nbsp;·&nbsp; Closed Weekends
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-blue tracking-tight">
              What Our Clients Say
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} className={`delay-${i + 1}`}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brand-orange text-brand-orange" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-brand-blue font-semibold text-sm mt-4">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Love your experience with us?{" "}
              <a
                href="https://www.google.com/maps/search/Lumpkins+Insurance+Agency+Beaumont+TX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange font-semibold hover:underline"
              >
                Leave us a Google Review
              </a>{" "}
              — it helps us serve more families in Beaumont.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-brand-orange py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Ready to Get Protected?
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Get a free, no-obligation quote in minutes. Our agents will call you back.
            </p>
            <Button
              asChild
              className="bg-white text-brand-orange hover:bg-slate-50 font-semibold h-12 px-8
                         text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <a href="#contact">Get a Free Quote</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3 block">
              Reach Out
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-blue tracking-tight mb-4">
              Let&apos;s Talk Insurance
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fill out the form below or give us a call — we&apos;ll get back to you quickly.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Form */}
            <ScrollReveal className="from-left lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-8 border border-border shadow-sm">
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal className="from-right lg:col-span-2">
              <div className="bg-brand-blue rounded-2xl p-8 text-white space-y-6">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                {[
                  { icon: Phone, label: "Call Us", value: "409-656-4898", href: "tel:4096564898" },
                  { icon: Mail, label: "Email Us", value: "tl@lumpkinsinsurance.com", href: "mailto:tl@lumpkinsinsurance.com" },
                  { icon: MapPin, label: "Visit Us", value: "3336 S Major Dr\nBeaumont, TX 77707", href: null },
                  { icon: Clock, label: "Hours", value: "Mon – Fri: 9AM – 5PM\nClosed Sat & Sun", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-orange-pale" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-brand-orange-pale transition-colors whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white
                             transition-all duration-200 font-semibold"
                >
                  <a href="https://www.lumpkinsinsurance.com/make-a-payment" target="_blank" rel="noopener noreferrer">
                    Make a Payment
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-brand-blue text-white/60 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-brand-orange flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Lumpkin&apos;s Insurance Agency LLC</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Your trusted independent insurance agency serving Beaumont, TX and surrounding communities since 1992.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Award className="w-4 h-4 text-brand-orange-pale" aria-hidden="true" />
                <span className="text-xs text-white/50">Licensed in Texas</span>
                <Users className="w-4 h-4 text-brand-orange-pale ml-2" aria-hidden="true" />
                <span className="text-xs text-white/50">4,000+ clients</span>
              </div>
            </div>

            {/* Personal Links */}
            <div>
              <h5 className="text-brand-orange-pale text-xs font-bold uppercase tracking-widest mb-4">
                Personal Insurance
              </h5>
              <ul className="space-y-2 text-sm">
                {["Auto Insurance", "Home Insurance", "Life Insurance", "Flood Insurance", "Renters Insurance", "Motorcycle & Toys"].map((l) => (
                  <li key={l}>
                    <a href="#services" className="hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business + Agency Links */}
            <div>
              <h5 className="text-brand-orange-pale text-xs font-bold uppercase tracking-widest mb-4">
                Business Insurance
              </h5>
              <ul className="space-y-2 text-sm mb-6">
                {["General Liability", "Commercial Property", "Business Owners Policy", "Workers' Compensation"].map((l) => (
                  <li key={l}>
                    <a href="#services" className="hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
              <h5 className="text-brand-orange-pale text-xs font-bold uppercase tracking-widest mb-4">
                Agency
              </h5>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Contact", href: "#contact" },
                  { label: "Claims & Quotes", href: "#contact" },
                  { label: "Privacy Policy", href: "#" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p>© {new Date().getFullYear()} Lumpkin&apos;s Insurance Agency LLC · Beaumont, TX ·{" "}
              <a href="tel:4096564898" className="hover:text-white transition-colors">409-656-4898</a>
            </p>
            <p className="text-white/35">Insurance products may not be available in all areas. Licensed in Texas.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

/* ─── Service Card (3-D flip) ───────────────────────── */
interface ServiceCardProps {
  icon: LucideIcon
  title: string
  desc: string
  bullets: string[]
  delay?: number
}

function ServiceCard({ icon: Icon, title, desc, bullets, delay = 0 }: ServiceCardProps) {
  return (
    <div className={`reveal delay-${delay}`} data-reveal>
      {/* CSS 3-D flip container */}
      <div
        className="group h-56 [perspective:1000px] cursor-pointer"
        tabIndex={0}
        role="button"
        aria-label={`${title} – hover or focus for details`}
      >
        <div
          className="relative w-full h-full [transform-style:preserve-3d]
                     transition-transform duration-500 ease-out
                     group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]"
        >
          {/* Front */}
          <div
            className="absolute inset-0 [backface-visibility:hidden]
                       bg-white border border-border rounded-xl p-6 flex flex-col justify-center
                       shadow-sm hover:shadow-md transition-shadow"
          >
            <Icon className="w-8 h-8 text-brand-orange mb-3" aria-hidden="true" />
            <h4 className="text-brand-blue font-semibold text-base mb-2">{title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
                       bg-brand-blue rounded-xl p-6 flex flex-col justify-center"
          >
            <h4 className="text-brand-orange-pale font-semibold text-base mb-3">{title}</h4>
            <ul className="space-y-1.5 mb-4 flex-1">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="text-brand-orange-pale text-xs" aria-hidden="true">→</span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="text-xs font-bold uppercase tracking-widest text-brand-orange-pale
                         hover:text-white transition-colors"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
