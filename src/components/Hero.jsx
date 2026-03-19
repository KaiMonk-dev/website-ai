import { useState } from 'react'
import { Star, Users, TrendingUp, Phone, Calendar, CheckCircle, MessageSquare } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Businesses Served', icon: Users,      color: '#22d3ee', bg: 'rgba(34,211,238,0.15)',  border: 'rgba(34,211,238,0.35)',  glow: 'rgba(34,211,238,0.25)'  },
  { value: '98%',  label: 'Client Retention',  icon: TrendingUp, color: '#34d399', bg: 'rgba(52,211,153,0.15)',  border: 'rgba(52,211,153,0.35)',  glow: 'rgba(52,211,153,0.25)'  },
  { value: '4.9/5',label: 'Rating',             icon: Star,       color: '#fbbf24', bg: 'rgba(251,191,36,0.15)',  border: 'rgba(251,191,36,0.35)',  glow: 'rgba(251,191,36,0.25)'  },
]

const activities = [
  { icon: Phone,         label: 'Call Answered',      color: '#22d3ee', delay: '0s' },
  { icon: Calendar,      label: 'Appointment Booked', color: '#c084fc', delay: '1s' },
  { icon: CheckCircle,   label: 'Lead Captured',      color: '#34d399', delay: '2s' },
  { icon: MessageSquare, label: 'SMS Follow-up Sent', color: '#f472b6', delay: '3s' },
]

const ringSizes = [110, 175, 240, 305]

const cornerPositions = [
  { top: 22,    left: 16   },
  { top: 22,    right: 16  },
  { bottom: 22, left: 16   },
  { bottom: 22, right: 16  },
]

const waveBars = [
  { h: 10, delay: 0    },
  { h: 16, delay: 0.10 },
  { h: 24, delay: 0.20 },
  { h: 32, delay: 0.30 },
  { h: 40, delay: 0.38 },
  { h: 46, delay: 0.44 },
  { h: 50, delay: 0.50 },
  { h: 46, delay: 0.56 },
  { h: 40, delay: 0.62 },
  { h: 32, delay: 0.70 },
  { h: 24, delay: 0.80 },
  { h: 16, delay: 0.90 },
  { h: 10, delay: 1.00 },
]

const industries = [
  { label: 'Medical',       emoji: '🏥' },
  { label: 'Law',           emoji: '⚖️' },
  { label: 'Real Estate',   emoji: '🏠' },
  { label: 'Home Services', emoji: '🔧' },
  { label: 'Restaurant',    emoji: '🍽️' },
]

const industryContent = {
  default: {
    headline: 'An Intelligent Voice Receptionist',
    sub: 'AI receptionists that answer calls, qualify leads, book appointments, and delight customers — 24/7.',
  },
  Medical: {
    headline: 'Never Miss a Patient Call Again',
    sub: 'Your HIPAA-compliant AI books appointments, answers insurance questions, and sends reminders — 24/7, without adding staff.',
  },
  Law: {
    headline: 'Capture Every Client Lead',
    sub: 'Qualify callers, schedule consultations, and follow up on cases automatically — even after hours and on weekends.',
  },
  'Real Estate': {
    headline: 'Turn Every Inquiry Into a Showing',
    sub: 'Answer listing questions, schedule showings, and qualify buyers instantly — so you never miss a hot lead.',
  },
  'Home Services': {
    headline: 'Book More Jobs, Answer Every Call',
    sub: 'Your AI answers calls 24/7, books service appointments, and dispatches your team — even nights and weekends.',
  },
  Restaurant: {
    headline: 'Fill Tables. Handle Every Reservation.',
    sub: 'Take reservations, answer menu questions, and manage waitlists automatically — without putting anyone on hold.',
  },
}

export default function Hero() {
  const [hovered, setHovered] = useState(false)
  const [activeIndustry, setActiveIndustry] = useState('default')

  const content = industryContent[activeIndustry] || industryContent.default

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="glow-orb w-[700px] h-[700px] bg-violet-600/20 -top-40 -left-32" />
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-500/15 top-1/4 right-0" />
      <div className="glow-orb w-[350px] h-[350px] bg-cyan-500/12 bottom-0 left-1/3" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-300">AI Receptionist — Live 24/7</span>
            </div>

            {/* Industry selector pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7">
              <span className="text-slate-500 text-xs self-center mr-1 hidden sm:inline">I'm in:</span>
              {industries.map(({ label, emoji }) => {
                const active = activeIndustry === label
                return (
                  <button
                    key={label}
                    onClick={() => setActiveIndustry(active ? 'default' : label)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                    style={{
                      background: active
                        ? 'linear-gradient(135deg, #7c3aed, #3b82f6)'
                        : 'rgba(255,255,255,0.06)',
                      border: active
                        ? '1px solid rgba(139,92,246,0.6)'
                        : '1px solid rgba(255,255,255,0.1)',
                      color: active ? '#fff' : '#94a3b8',
                      boxShadow: active ? '0 0 12px rgba(124,58,237,0.4)' : 'none',
                    }}
                  >
                    <span>{emoji}</span>
                    {label}
                  </button>
                )
              })}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Business Deserves
              <span key={content.headline} className="block gradient-text mt-2" style={{ animation: 'fadeIn 0.4s ease' }}>
                {content.headline}
              </span>
            </h1>

            {/* Subtext — swaps per industry */}
            <p key={content.sub} className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed" style={{ animation: 'fadeIn 0.4s ease' }}>
              {content.sub.replace('24/7', '').split('').length > 0
                ? content.sub.split('24/7').reduce((acc, part, i, arr) =>
                    i < arr.length - 1
                      ? [...acc, part, <span key={i} className="text-white font-semibold">24/7</span>]
                      : [...acc, part],
                  [])
                : content.sub
              }
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
              <a
                href="https://calendly.com/ascensionfirstai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
              </a>
              <a
                href="/demo.html"
                className="neon-btn flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg,#06d6a0,#059669)', borderColor: '#06d6a0' }}
              >
                See Your Free Demo
              </a>
            </div>

            {/* Video teaser link */}
            <div className="flex justify-center lg:justify-start mb-8">
              <a
                href="#how-it-works"
                className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <svg className="w-3 h-3 text-white" style={{ marginLeft: '2px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Watch the 2-min overview
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {stats.map(({ value, label, icon: Icon, color, bg, border, glow }) => (
                <div key={label} className="glass-card px-5 py-4 flex items-center gap-3" style={{ borderColor: border }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: bg, border: `1px solid ${border}`, boxShadow: `0 0 12px ${glow}` }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="text-xs text-slate-400 tracking-wide">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: AI Orb ── */}
          <div className="flex-shrink-0 hidden lg:flex flex-col items-center">
            <div
              className="relative"
              style={{ width: 560, height: 520 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {ringSizes.map((size, i) => (
                <div
                  key={i}
                  className="orb-ring absolute"
                  style={{
                    width: size, height: size,
                    top: '50%', left: '50%',
                    marginLeft: -(size / 2), marginTop: -(size / 2),
                    animationDelay: `${i * 0.75}s`,
                    animationDuration: hovered ? '1.7s' : '3s',
                    borderColor: i % 2 === 0 ? 'rgba(139,92,246,0.55)' : 'rgba(34,211,238,0.4)',
                  }}
                />
              ))}

              <div
                className="absolute z-10 flex items-center justify-center rounded-full cursor-pointer overflow-hidden"
                style={{
                  width: 112, height: 112,
                  top: '50%', left: '50%',
                  marginLeft: -56, marginTop: -56,
                  background: 'linear-gradient(135deg, #1a0a2e 0%, #0d1a3a 50%, #091a26 100%)',
                  border: '2px solid rgba(139,92,246,0.6)',
                  boxShadow: hovered
                    ? '0 0 70px rgba(139,92,246,0.95), 0 0 140px rgba(99,102,241,0.55), 0 0 200px rgba(34,211,238,0.3)'
                    : '0 0 40px rgba(139,92,246,0.7), 0 0 80px rgba(139,92,246,0.3)',
                  transform: hovered ? 'scale(1.1)' : 'scale(1)',
                  transition: 'box-shadow 0.4s ease, transform 0.3s ease',
                }}
              >
                <div className="flex items-center gap-[2.5px]" style={{ height: 56, paddingBottom: 2 }}>
                  {waveBars.map(({ h, delay }, i) => (
                    <div
                      key={i}
                      style={{
                        width: 3, height: h, borderRadius: 3,
                        background: i < 4 || i > 8
                          ? 'linear-gradient(to top, #8b5cf6, #c084fc)'
                          : 'linear-gradient(to top, #6366f1, #22d3ee)',
                        transformOrigin: 'center bottom',
                        animation: 'orbWave 2.8s cubic-bezier(0.37, 0, 0.63, 1) infinite',
                        animationDelay: `${delay}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute z-20" style={{ top: 'calc(50% - 60px)', left: 'calc(50% + 36px)' }}>
                <div
                  className="w-3.5 h-3.5 rounded-full bg-green-400"
                  style={{ boxShadow: '0 0 10px #4ade80', animation: 'pulseRing 2s ease-out infinite' }}
                />
              </div>

              {activities.map(({ icon: Icon, label, color, delay }, i) => (
                <div
                  key={label}
                  className="activity-chip absolute glass-card px-3 py-2.5 flex items-center gap-2 whitespace-nowrap z-20"
                  style={{ ...cornerPositions[i], borderColor: `${color}40`, animationDelay: delay }}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
                  <span className="text-white text-xs font-semibold tracking-wide">{label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
