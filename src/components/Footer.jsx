import { Twitter, Linkedin, Instagram, Facebook, Phone, Mail, Calendar, Shield } from 'lucide-react'

const CALENDLY = 'https://calendly.com/ascensionfirstai/30min'

const links = {
  Services: [
    { label: 'AI Voice Receptionist', href: '#features' },
    { label: 'Appointment Booking', href: '#features' },
    { label: 'Lead Qualification', href: '#features' },
    { label: 'Call Analytics', href: '#features' },
    { label: 'CRM Integration', href: '#features' },
  ],
  Industries: [
    { label: 'Medical & Dental', href: '#' },
    { label: 'Law Firms', href: '#' },
    { label: 'Real Estate', href: '#' },
    { label: 'Auto Dealerships', href: '#' },
    { label: 'Home Services', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Case Studies', href: '#testimonials' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'HIPAA Compliance', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, #6366f1, #22d3ee, transparent)' }}
      />

      <div
        className="py-16 relative"
        style={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.06) 0%, transparent 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 15 L6 8.5 L10 12.5 L16.5 2.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9 6.3 L16.5 2.5 L13.3 4.6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-bold text-white leading-none whitespace-nowrap">
                  Ascension First&nbsp;<span className="gradient-text">AI</span>
                </span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                The AI receptionist platform built for businesses that refuse to miss a single opportunity.
              </p>
              {/* Contact details */}
              <div className="space-y-2 mb-5">
                <a href="tel:+18584347041" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-cyan-500" />+1 (858) 434-7041
                </a>
                <a href="mailto:hello@ascensionfirstai.com" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />hello@ascensionfirstai.com
                </a>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />Book a free 30-min call
                </a>
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {['HIPAA Compliant', 'SOC2 Certified', 'SSL Secured'].map(b => (
                  <span key={b} className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] text-slate-500" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Shield className="w-2.5 h-2.5 text-emerald-500" />{b}
                  </span>
                ))}
              </div>
              {/* Social icons */}
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 glass-card flex items-center justify-center hover:border-purple-500/30 transition-all duration-200 hover:text-purple-400"
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <div className="text-white text-sm font-semibold mb-4">{category}</div>
                <ul className="space-y-2.5">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Ascension First AI. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.9/5 · 500+ businesses · No contracts · 30-day guarantee</span>
            </div>
            <p
              className="text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg, #c084fc, #6366f1, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Stop Missing Calls. Start Growing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
