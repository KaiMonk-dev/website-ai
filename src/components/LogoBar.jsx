const industries = [
  { label: 'Medical & Dental',    emoji: '🏥' },
  { label: 'Law Firms',           emoji: '⚖️' },
  { label: 'Real Estate',         emoji: '🏠' },
  { label: 'Home Services',       emoji: '🔧' },
  { label: 'Restaurants',         emoji: '🍽️' },
  { label: 'Auto Dealerships',    emoji: '🚗' },
  { label: 'Fitness & Wellness',  emoji: '💪' },
  { label: 'Property Management', emoji: '🏢' },
  { label: 'Chiropractors',       emoji: '🩺' },
  { label: 'Salons & Spas',       emoji: '💈' },
  { label: 'Insurance Agencies',  emoji: '🛡️' },
  { label: 'Mortgage Brokers',    emoji: '🔑' },
]

// Duplicate for seamless loop
const items = [...industries, ...industries]

export default function LogoBar() {
  return (
    <div className="relative py-10 overflow-hidden border-y" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Edge fade-out masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #050508, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #050508, transparent)' }}
      />

      {/* Label */}
      <p className="text-center text-slate-600 text-xs tracking-widest uppercase mb-5 font-medium">
        Trusted by 500+ businesses across 12+ industries
      </p>

      {/* Marquee track */}
      <div className="flex" style={{ width: 'max-content', animation: 'marquee 28s linear infinite' }}>
        {items.map(({ label, emoji }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 mx-5 px-4 py-2 rounded-full whitespace-nowrap"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span className="text-base leading-none">{emoji}</span>
            <span className="text-slate-400 text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
