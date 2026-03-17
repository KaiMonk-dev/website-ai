import { Phone, Play, ArrowRight, Star, Users, TrendingUp } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Businesses Served', icon: Users },
  { value: '98%', label: 'Client Retention', icon: TrendingUp },
  { value: '4.9/5', label: 'Rating', icon: Star },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-purple-600/20 -top-40 -left-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-blue-500/15 top-1/4 right-0" />
      <div className="glow-orb w-[300px] h-[300px] bg-cyan-500/10 bottom-0 left-1/3" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-slate-300">AI Receptionist — Live 24/7</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Business Deserves{' '}
            <span className="block gradient-text mt-2">
              An Intelligent Voice Receptionist
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            AI receptionists that answer calls, qualify leads, book appointments,
            and delight customers —{' '}
            <span className="text-white font-medium">24/7.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact" className="neon-btn flex items-center justify-center gap-2 text-base">
              <Phone className="w-5 h-5" />
              Book a Free Demo Call
            </a>
            <a href="#how-it-works" className="outline-btn flex items-center justify-center gap-2 text-base">
              <Play className="w-5 h-5 fill-white" />
              See How It Works
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="glass-card px-8 py-5 flex items-center gap-4 min-w-[180px]"
              >
                <div className="feature-icon">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating phone mockup */}
        <div className="mt-20 flex justify-center">
          <div
            className="relative glass-card p-6 max-w-sm w-full animate-float"
            style={{ animationDuration: '6s' }}
          >
            {/* Gradient border effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-40"
              style={{
                background: 'linear-gradient(135deg, #7c3aed22, #3b82f622, #06b6d422)',
                border: '1px solid',
                borderImageSlice: 1,
              }}
            />
            {/* Call status UI */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">AI Active</span>
                </div>
                <span className="text-slate-500 text-xs">00:02:34</span>
              </div>
              <div className="text-slate-300 text-sm mb-4 leading-relaxed">
                <span className="text-purple-400 font-medium">AI Receptionist: </span>
                "Thank you for calling! I can schedule your appointment right now. What date works best for you?"
              </div>
              {/* Waveform */}
              <div className="flex items-end gap-1 h-8 justify-center">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="wave-bar"
                    style={{ animationDelay: `${(i % 8) * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
                <span>Incoming call routed</span>
                <span className="text-cyan-400">Booking in progress...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
