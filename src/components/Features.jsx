import {
  Clock, MessageSquare, Calendar, GitBranch,
  Repeat, BarChart3, ShieldCheck, Zap, Star
} from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'Never miss a call again. Your AI receptionist is always on — nights, weekends, holidays.',
    color: 'text-purple-400',
    gradient: 'from-purple-600/20 to-purple-800/10',
  },
  {
    icon: MessageSquare,
    title: 'Human-like Conversations',
    desc: 'Natural language processing so advanced, callers feel like they\'re talking to a real person.',
    color: 'text-blue-400',
    gradient: 'from-blue-600/20 to-blue-800/10',
  },
  {
    icon: Calendar,
    title: 'Instant Appointment Booking',
    desc: 'Syncs with your calendar in real-time. No back-and-forth, no double bookings.',
    color: 'text-cyan-400',
    gradient: 'from-cyan-600/20 to-cyan-800/10',
  },
  {
    icon: GitBranch,
    title: 'Smart Call Routing',
    desc: 'Intelligently routes urgent calls, escalates emergencies, and categorizes every interaction.',
    color: 'text-violet-400',
    gradient: 'from-violet-600/20 to-violet-800/10',
  },
  {
    icon: Repeat,
    title: 'Multi-channel Follow-ups',
    desc: 'Automatic SMS and email follow-ups keep your leads warm and your pipeline full.',
    color: 'text-indigo-400',
    gradient: 'from-indigo-600/20 to-indigo-800/10',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Deep insights into call volume, lead quality, conversion rates, and ROI.',
    color: 'text-sky-400',
    gradient: 'from-sky-600/20 to-sky-800/10',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA & SOC2 Compliant',
    desc: 'Enterprise-grade security. Your data and your clients\' data are always protected.',
    color: 'text-emerald-400',
    gradient: 'from-emerald-600/20 to-emerald-800/10',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment (72 hrs)',
    desc: 'Go live in as little as 72 hours. We handle the full setup, training, and testing.',
    color: 'text-yellow-400',
    gradient: 'from-yellow-600/20 to-yellow-800/10',
  },
  {
    icon: Star,
    title: 'White-glove Onboarding',
    desc: 'Dedicated support team walks you through every step and stays with you for the long haul.',
    color: 'text-pink-400',
    gradient: 'from-pink-600/20 to-pink-800/10',
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
            Everything Your Business Needs{' '}
            <span className="gradient-text">To Never Miss a Lead</span>
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
