import { Phone, PhoneCall, Calendar, Mic } from 'lucide-react'

const steps = [
  { number: '01', label: 'Call the number below', icon: Phone },
  { number: '02', label: 'AI answers instantly', icon: PhoneCall },
  { number: '03', label: 'Experience the demo', icon: Mic },
  { number: '04', label: 'Book a strategy call live', icon: Calendar },
]

export default function Demo() {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[700px] h-[400px] bg-cyan-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.05))',
            borderColor: 'rgba(124,58,237,0.25)',
          }}
        >
          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full border border-purple-500/10" style={{ animation: 'spin 20s linear infinite' }} />
            <div className="absolute w-[350px] h-[350px] rounded-full border border-blue-500/10" style={{ animation: 'spin 15s linear infinite reverse' }} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-cyan-400">
              <Mic className="w-4 h-4" />
              Live AI Demo
            </div>

            <h2 className="section-title mb-4">
              Don't Take Our Word For It —{' '}
              <span className="gradient-text">Call the AI Yourself</span>
            </h2>
            <p className="text-slate-400 mb-10">
              Experience a real AI receptionist conversation. No scripts, no tricks — just our live AI in action.
            </p>

            {/* Phone CTA — pulse rings + "Tap to call" label on mobile */}
            <div className="flex flex-col items-center gap-3 mb-10">
              <a
                href="tel:+16193337864"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-2xl font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(59,130,246,0.2)',
                }}
              >
                <div className="relative">
                  {/* Outer pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      animation: 'pulseRing 1.8s ease-out infinite',
                    }}
                  />
                  {/* Second pulse ring with delay */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      animation: 'pulseRing 1.8s ease-out infinite 0.6s',
                    }}
                  />
                  <Phone className="relative w-7 h-7" />
                </div>
                +1 (619) 333-7864
              </a>
              {/* "Tap to call" label — prominent on mobile */}
              <span className="md:hidden text-cyan-400 text-sm font-semibold animate-pulse flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                Tap to call — AI answers instantly
              </span>
              <span className="hidden md:block text-slate-500 text-xs">
                Click to call — AI answers instantly, 24/7
              </span>
            </div>

            {/* Book a strategy call CTA */}
            <div className="mb-10">
              <a
                href="https://calendly.com/ascensionfirstai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(124,58,237,0.2)',
                  border: '1px solid rgba(124,58,237,0.4)',
                  boxShadow: '0 0 20px rgba(124,58,237,0.2)',
                }}
              >
                <Calendar className="w-4 h-4 text-purple-400" />
                Or book a free strategy call directly →
              </a>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {steps.map(({ number, label, icon: Icon }) => (
                <div key={number} className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-purple-400 text-xs font-bold mb-1">{number}</div>
                  <div className="text-slate-300 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
