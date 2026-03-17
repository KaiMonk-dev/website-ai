import { Building2, Scale, Home, Car, Wrench, UtensilsCrossed } from 'lucide-react'

const industries = [
  { icon: Building2, label: 'Medical Clinics' },
  { icon: Scale, label: 'Law Firms' },
  { icon: Home, label: 'Real Estate' },
  { icon: Car, label: 'Auto Dealers' },
  { icon: Wrench, label: 'Home Services' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
]

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 relative overflow-hidden">
      <div
        className="glow-orb w-[500px] h-[200px] bg-purple-600/10 top-0 left-1/2 -translate-x-1/2"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-8">
          Trusted by businesses across every industry
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {industries.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-5 py-3 glass-card hover:border-purple-500/30 transition-all duration-200 group"
            >
              <Icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-slate-400 group-hover:text-slate-200 text-sm font-medium transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
