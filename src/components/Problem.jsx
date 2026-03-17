import { PhoneMissed, DollarSign, Clock, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: PhoneMissed,
    value: '62%',
    label: 'of callers won\'t call back',
    desc: 'Once they hang up, they\'re gone to a competitor.',
    color: 'text-red-400',
    bg: 'rgba(239,68,68,0.1)',
    border: 'rgba(239,68,68,0.2)',
  },
  {
    icon: DollarSign,
    value: '$250K+',
    label: 'lost in revenue annually',
    desc: 'Missed calls = missed bookings = missed revenue.',
    color: 'text-orange-400',
    bg: 'rgba(249,115,22,0.1)',
    border: 'rgba(249,115,22,0.2)',
  },
  {
    icon: Clock,
    value: '80%',
    label: 'expect response within 5 min',
    desc: 'Speed-to-answer is the #1 factor in conversions.',
    color: 'text-yellow-400',
    bg: 'rgba(234,179,8,0.1)',
    border: 'rgba(234,179,8,0.2)',
  },
  {
    icon: TrendingUp,
    value: '7x',
    label: 'higher conversion if answered fast',
    desc: 'Instant answers turn callers into paying clients.',
    color: 'text-purple-400',
    bg: 'rgba(124,58,237,0.1)',
    border: 'rgba(124,58,237,0.2)',
  },
]

export default function Problem() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[400px] bg-red-900/10 top-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            The Problem
          </div>
          <h2 className="section-title mb-4">
            The Cost of Missing Calls{' '}
            <span className="gradient-text">Is Staggering</span>
          </h2>
          <p className="section-subtitle">
            Every unanswered call is revenue walking out the door. The numbers don't lie.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, desc, color, bg, border }) => (
            <div
              key={value}
              className="glass-card-hover p-6 text-center group"
              style={{ '--hover-border': border }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <Icon className={`w-8 h-8 ${color}`} />
              </div>
              <div className={`text-4xl font-black mb-2 ${color}`}>{value}</div>
              <div className="text-white font-semibold mb-2 text-sm">{label}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
