import { useState } from 'react'
import { Play, ArrowRight, Star, Users, TrendingUp, Phone, Calendar, CheckCircle, MessageSquare } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Businesses Served', icon: Users },
  { value: '98%',  label: 'Client Retention',  icon: TrendingUp },
  { value: '4.9/5',label: 'Rating',             icon: Star },
]

const activities = [
  { icon: Phone,         label: 'Call Answered',       color: '#22d3ee', delay: '0s' },
  { icon: Calendar,      label: 'Appointment Booked',  color: '#c084fc', delay: '1s' },
  { icon: CheckCircle,   label: 'Lead Captured',       color: '#34d399', delay: '2s' },
  { icon: MessageSquare, label: 'SMS Follow-up Sent',  color: '#f472b6', delay: '3s' },
]

// Ring diameters — small enough that corner chips (22px inset) are always clear
const ringSizes = [110, 175, 240, 305]

// Chips in the 4 corners of the 560×520 container (~230px from orb center)
const cornerPositions = [
  { top: 22,    left: 16   },
  { top: 22,    right: 16  },
  { bottom: 22, left: 16   },
  { bottom: 22, right: 16  },
]

// Voice wave bar config — bell-curve heights for organic feel
const waveBars = [
  { h: 10, delay: 0    },
  { h: 16, delay: 0.10 },
  { h: 24, delay: 0.20 },
  { h: 32, delay: 0.30 },
  { h: 40, delay: 0.38 },
  { h: 46, delay: 0.44 },
  { h: 50, delay: 0.50 }, // tallest — centre
  { h: 46, delay: 0.56 },
  { h: 40, delay: 0.62 },
  { h: 32, delay: 0.70 },
  { h: 24, delay: 0.80 },
  { h: 16, delay: 0.90 },
  { h: 10, delay: 1.00 },
]

export default function Hero() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow orbs */}
      <div className="glow-orb w-[700px] h-[700px] bg-violet-600/20 -top-40 -left-32" />
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-500/15 top-1/4 right-0" />
      <div className="glow-orb w-[350px] h-[350px] bg-cyan-500/12 bottom-0 left-1/3" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">

          {/* ── Left column ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-300">AI Receptionist — Live 24/7</span>
            </div>

            {/* Headline — Orbitron applied via global h1 rule */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Business Deserves
              <span className="block gradient-text mt-2">
                An Intelligent Voice Receptionist
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed">
              AI receptionists that answer calls, qualify leads, book appointments,
              and delight customers —{' '}
              <span className="text-white font-semibold">24/7.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="#contact" className="neon-btn flex items-center justify-center gap-2">
                Book a Free Demo Call
              </a>
              <a href="#how-it-works" className="outline-btn flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-white flex-shrink-0" />
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="glass-card px-5 py-4 flex items-center gap-3">
                  <div className="feature-icon w-10 h-10">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="text-xs text-slate-400 tracking-wide">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: AI Orb hero shot ── */}
          <div className="flex-shrink-0 hidden lg:flex flex-col items-center">
            {/* Orb container — 560×520px, chips at corners far from rings */}
            <div
              className="relative"
              style={{ width: 560, height: 520 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Pulse rings */}
              {ringSizes.map((size, i) => (
                <div
                  key={i}
                  className="orb-ring absolute"
                  style={{
                    width: size,
                    height: size,
                    top: '50%',
                    left: '50%',
                    marginLeft: -(size / 2),
                    marginTop: -(size / 2),
                    animationDelay: `${i * 0.75}s`,
                    animationDuration: hovered ? '1.7s' : '3s',
                    borderColor: i % 2 === 0
                      ? 'rgba(139,92,246,0.55)'
                      : 'rgba(34,211,238,0.4)',
                  }}
                />
              ))}

              {/* Core orb — voice wave visualizer instead of icon */}
              <div
                className="absolute z-10 flex items-center justify-center rounded-full cursor-pointer overflow-hidden"
                style={{
                  width: 112,
                  height: 112,
                  top: '50%',
                  left: '50%',
                  marginLeft: -56,
                  marginTop: -56,
                  background: 'linear-gradient(135deg, #1a0a2e 0%, #0d1a3a 50%, #091a26 100%)',
                  border: '2px solid rgba(139,92,246,0.6)',
                  boxShadow: hovered
                    ? '0 0 70px rgba(139,92,246,0.95), 0 0 140px rgba(99,102,241,0.55), 0 0 200px rgba(34,211,238,0.3)'
                    : '0 0 40px rgba(139,92,246,0.7), 0 0 80px rgba(139,92,246,0.3)',
                  transform: hovered ? 'scale(1.1)' : 'scale(1)',
                  transition: 'box-shadow 0.4s ease, transform 0.3s ease',
                }}
              >
                {/* Ocean-wave voice bars */}
                <div
                  className="flex items-center gap-[2.5px]"
                  style={{ height: 56, paddingBottom: 2 }}
                >
                  {waveBars.map(({ h, delay }, i) => (
                    <div
                      key={i}
                      style={{
                        width: 3,
                        height: h,
                        borderRadius: 3,
                        background: i < 4 || i > 8
                          ? 'linear-gradient(to top, #8b5cf6, #c084fc)'
                          : 'linear-gradient(to top, #6366f1, #22d3ee)',
                        transformOrigin: 'center bottom',
                        animation: `orbWave ${hovered ? '0.9s' : '1.6s'} ease-in-out infinite`,
                        animationDelay: `${delay}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Live indicator dot */}
              <div
                className="absolute z-20"
                style={{ top: 'calc(50% - 60px)', left: 'calc(50% + 36px)' }}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full bg-green-400"
                  style={{ boxShadow: '0 0 10px #4ade80', animation: 'pulseRing 2s ease-out infinite' }}
                />
              </div>

              {/* Activity chips — 4 corners, safely outside rings */}
              {activities.map(({ icon: Icon, label, color, delay }, i) => (
                <div
                  key={label}
                  className="activity-chip absolute glass-card px-3 py-2.5 flex items-center gap-2 whitespace-nowrap z-20"
                  style={{
                    ...cornerPositions[i],
                    borderColor: `${color}40`,
                    animationDelay: delay,
                  }}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
                  <span className="text-white text-xs font-semibold tracking-wide">{label}</span>
                </div>
              ))}
            </div>

            {/* AI Active status card — sits cleanly BELOW the container, no overlap */}
            <div
              className="glass-card p-4 mt-6 z-30 relative"
              style={{
                width: 280,
                borderColor: 'rgba(139,92,246,0.35)',
                animation: 'float 5s ease-in-out infinite',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold tracking-wider">AI ACTIVE</span>
                </div>
                <span className="text-slate-500 text-xs">00:02:34</span>
              </div>
              <div className="text-xs text-slate-300 mb-2 leading-relaxed">
                <span className="text-violet-400 font-semibold">AI: </span>
                "What date works best for your appointment?"
              </div>
              <div className="flex items-end gap-0.5 h-4 justify-center">
                {[...Array(14)].map((_, idx) => (
                  <div
                    key={idx}
                    className="wave-bar"
                    style={{ animationDelay: `${(idx % 8) * 0.1}s`, width: '2.5px' }}
                  />
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
                <span>Call routed</span>
                <span className="text-cyan-400 font-semibold">Booking in progress…</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
