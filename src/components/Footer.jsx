import { Zap, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'

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
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #3b82f6, #06b6d4, transparent)' }}
      />

      <div
        className="py-16 relative"
        style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.04) 0%, transparent 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Ascension <span className="gradient-text">AI</span>
                </span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                The AI receptionist platform built for businesses that refuse to miss a single opportunity.
              </p>
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
              © {new Date().getFullYear()} Ascension AI. All rights reserved.
            </p>
            <p
              className="text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Stop Missing Calls. Start Growing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
