import { Calendar, GitBranch, Repeat, BarChart3, ShieldCheck, Zap } from 'lucide-react'

// 6 differentiating capabilities — 24/7, human-like, and white-glove are
// already shown in Hero / Demo / Process respectively, so removed here
const features = [
  {
    icon: Calendar,
    title: 'Instant Appointment Booking',
    desc: 'Syncs with your calendar in real-time. No back-and-forth, no double bookings, ever.',
    color: 'text-cyan-400',
    gradient: 'from-cyan-600/20 to-cyan-800/10',
  },
  {
    icon: GitBranch,
    title: 'Smart Call Routing',
    desc: 'Routes urgent calls instantly, escalates emergencies, and categorizes every interaction automatically.',
    color: 'text-violet-400',
    gradient: 'from-violet-600/20 to-violet-800/10',
  },
  {
    icon: Repeat,
    title: 'Multi-channel Follow-ups',
    desc: 'Automatic SMS and email follow-ups keep leads warm and your pipeline consistently full.',
    color: 'text-indigo-400',
    gradient: 'from-indigo-600/20 to-indigo-800/10',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Deep insights into call volume, lead quality, conversion rates, and exact ROI — always visible.',
    color: 'text-sky-400',
    gradient: 'from-sky-600/20 to-sky-800/10',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA & SOC2 Compliant',
    desc: 'Enterprise-grade security built in from day one. Your data and your clients\' data are always protected.',
    color: 'text-emerald-400',
    gradient: 'from-emerald-600/20 to-emerald-800/10',
  },
  {
    icon: Zap,
    title: 'Live in 72 Hours',
    desc: 'We handle setup, training, and testing end-to-end. From strategy call to fully live in as little as 3 days.',
    color: 'text-yellow-400',
    gradient: 'from-yellow-600/20 to-yellow-800/10',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-purple-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-purple-400">
            <Zap className="w-4 h-4" />
            Powerful Features
          </div>
          <h2 className="section-title mb-4">
            Six Capabilities That{' '}
            <span className="gradient-text">Set Us Apart</span>
          </h2>
          <p className="section-subtitle">
            A complete AI receptionist suite built for modern businesses that want to grow without limits.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color, gradient }) => (
            <div key={title} className="glass-card-hover p-6 group">
              <div className={`feature-icon mb-4 bg-gradient-to-br ${gradient}`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
