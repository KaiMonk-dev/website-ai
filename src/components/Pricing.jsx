import { Check, Zap, Star, Building } from 'lucide-react'

const CALENDLY = 'https://calendly.com/ascensionfirstai/30min'

const plans = [
  {
    name: 'Starter',
    price: '$497',
    period: '/mo',
    desc: 'Perfect for small businesses ready to stop missing calls.',
    icon: Zap,
    color: 'text-blue-400',
    features: [
      '1 AI receptionist line',
      'Unlimited minutes',
      'Appointment booking',
      'SMS follow-ups',
      'Basic analytics dashboard',
      'Email support',
      '72-hour setup',
    ],
    cta: 'Get Started',
    href: CALENDLY,
    external: true,
    popular: false,
  },
  {
    name: 'Professional',
    price: '$997',
    period: '/mo',
    desc: 'For growing businesses that need full-scale AI receptionist power.',
    icon: Star,
    color: 'text-purple-400',
    features: [
      '3 AI receptionist lines',
      'Unlimited minutes',
      'CRM integration',
      'Advanced call routing',
      'Multi-channel follow-ups',
      'Full analytics & reporting',
      'Dedicated account manager',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    href: CALENDLY,
    external: true,
    popular: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large operations that demand white-glove, enterprise-grade solutions.',
    icon: Building,
    color: 'text-cyan-400',
    features: [
      'Unlimited AI lines',
      'Unlimited minutes',
      'Full API access',
      'White-label option',
      'Custom AI training',
      'SLA guarantee',
      'Dedicated success team',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    href: '#contact',
    external: false,
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[700px] h-[500px] bg-purple-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-purple-400">
            <Star className="w-4 h-4" />
            Simple Pricing
          </div>
          <h2 className="section-title mb-4">
            Transparent Pricing,{' '}
            <span className="gradient-text">Extraordinary Results</span>
          </h2>
          <p className="section-subtitle">
            No hidden fees. No contracts. Cancel anytime. Just results.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map(({ name, price, period, desc, icon: Icon, color, features, cta, href, external, popular, badge }) => (
            <div
              key={name}
              className={`glass-card p-8 relative transition-all duration-300 ${
                popular
                  ? 'scale-105 border-purple-500/40'
                  : 'hover:border-white/20'
              }`}
              style={
                popular
                  ? {
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(59,130,246,0.06))',
                      boxShadow: '0 0 60px rgba(124,58,237,0.2), 0 20px 60px rgba(0,0,0,0.4)',
                    }
                  : {}
              }
            >
              {/* Popular badge */}
              {badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)' }}
                >
                  {badge}
                </div>
              )}

              {/* Plan header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: popular ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${popular ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  }}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <span className="text-white font-bold text-lg">{name}</span>
              </div>

              <p className="text-slate-500 text-sm mb-6">{desc}</p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-black ${popular ? 'gradient-text' : 'text-white'}`}>
                    {price}
                  </span>
                  {period && <span className="text-slate-400 text-lg mb-1">{period}</span>}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{
                        background: popular ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.05)',
                        border: `1px solid ${popular ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.1)'}`,
                      }}
                    >
                      <Check className={`w-3 h-3 ${popular ? 'text-purple-400' : 'text-slate-400'}`} />
                    </div>
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`block text-center py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  popular
                    ? 'neon-btn'
                    : 'outline-btn hover:bg-white/5'
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-14 text-slate-500 text-sm">
          {['No contracts', '30-day money-back guarantee', 'Cancel anytime', 'HIPAA & SOC2 compliant'].map(t => (
            <div key={t} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
