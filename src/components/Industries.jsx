import { Building2, Scale, Home, Car, Wrench, UtensilsCrossed, Dumbbell, Key } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    name: 'Medical & Dental',
    desc: 'Book appointments, answer FAQs, route urgent calls, HIPAA-compliant.',
    color: 'text-blue-400',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Scale,
    name: 'Law Firms',
    desc: 'Qualify leads, schedule consultations, route by practice area.',
    color: 'text-purple-400',
    bg: 'rgba(124,58,237,0.1)',
    border: 'rgba(124,58,237,0.2)',
  },
  {
    icon: Home,
    name: 'Real Estate',
    desc: 'Capture buyer/seller leads, schedule showings, qualify prospects.',
    color: 'text-cyan-400',
    bg: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    icon: Car,
    name: 'Auto Dealerships',
    desc: 'Book test drives, answer inventory questions, route to right department.',
    color: 'text-orange-400',
    bg: 'rgba(249,115,22,0.1)',
    border: 'rgba(249,115,22,0.2)',
  },
  {
    icon: Wrench,
    name: 'Home Services',
    desc: 'Capture emergency calls, dispatch technicians, schedule service calls.',
    color: 'text-yellow-400',
    bg: 'rgba(234,179,8,0.1)',
    border: 'rgba(234,179,8,0.2)',
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurants',
    desc: 'Take reservations, handle catering inquiries, answer menu questions.',
    color: 'text-red-400',
    bg: 'rgba(239,68,68,0.1)',
    border: 'rgba(239,68,68,0.2)',
  },
  {
    icon: Dumbbell,
    name: 'Fitness & Wellness',
    desc: 'Book classes, handle memberships, capture new member leads.',
    color: 'text-green-400',
    bg: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.2)',
  },
  {
    icon: Key,
    name: 'Property Management',
    desc: 'Handle maintenance requests, answer tenant questions, schedule viewings.',
    color: 'text-violet-400',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.2)',
  },
]

export default function Industries() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[400px] bg-cyan-500/8 top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-cyan-400">
            <Building2 className="w-4 h-4" />
            Industries We Serve
          </div>
          <h2 className="section-title mb-4">
            Built for Your Industry,{' '}
            <span className="gradient-text">Ready Out of the Box</span>
          </h2>
          <p className="section-subtitle">
            Pre-trained on industry-specific scripts and workflows. Go live faster with less customization.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map(({ icon: Icon, name, desc, color, bg, border }) => (
            <div
              key={name}
              className="glass-card-hover p-6 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          Don't see your industry? We work with any business that takes inbound calls.{' '}
          <a href="#contact" className="text-purple-400 hover:text-purple-300 underline">
            Talk to us →
          </a>
        </p>
      </div>
    </section>
  )
}
