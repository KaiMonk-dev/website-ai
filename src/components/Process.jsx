import { Search, Settings, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Strategy Call',
    desc: 'We deep-dive into your business, understand your workflows, and map out the perfect AI solution tailored to your needs.',
    color: 'text-purple-400',
    bg: 'rgba(124,58,237,0.15)',
    border: 'rgba(124,58,237,0.3)',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Build & Configure',
    desc: 'Our team builds and trains your AI receptionist with your scripts, brand voice, calendar integrations, and workflows.',
    color: 'text-blue-400',
    bg: 'rgba(59,130,246,0.15)',
    border: 'rgba(59,130,246,0.3)',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Go Live in 72 Hours',
    desc: 'We test, refine, and launch your AI. From first call to full deployment in as little as 3 days.',
    color: 'text-cyan-400',
    bg: 'rgba(6,182,212,0.15)',
    border: 'rgba(6,182,212,0.3)',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimize & Scale',
    desc: 'Ongoing monitoring, monthly reports, and continuous improvements to maximize your ROI as you grow.',
    color: 'text-violet-400',
    bg: 'rgba(139,92,246,0.15)',
    border: 'rgba(139,92,246,0.3)',
  },
]

export default function Process() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-blue-600/10 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-blue-400">
            <Rocket className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="section-title mb-4">
            From Zero to Live in{' '}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="section-subtitle">
            We handle everything. You just show up for the strategy call and watch your business transform.
          </p>
        </div>

        {/* Vimeo video embed */}
        <div className="max-w-4xl mx-auto mb-20">
          <div
            className="glass-card overflow-hidden p-1.5 relative"
            style={{
              borderColor: 'rgba(139,92,246,0.35)',
              boxShadow: '0 0 60px rgba(139,92,246,0.2), 0 0 120px rgba(99,102,241,0.1)',
            }}
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-10"
              style={{
                background: 'linear-gradient(90deg, transparent, #8b5cf6, #22d3ee, transparent)',
              }}
            />
            <div
              className="rounded-xl overflow-hidden"
              style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
            >
              <iframe
                src="https://player.vimeo.com/video/1156355064?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&share=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title="See How Ascension First AI Works"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(59,130,246,0.4), rgba(6,182,212,0.4), transparent)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ number, icon: Icon, title, desc, color, bg, border }, idx) => (
              <div key={number} className="text-center relative">
                {/* Number + icon circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                    style={{ background: bg, border: `1px solid ${border}` }}
                  >
                    <Icon className={`w-7 h-7 ${color}`} />
                  </div>
                </div>

                {/* Step number */}
                <div
                  className={`text-xs font-bold uppercase tracking-widest mb-3 ${color}`}
                >
                  Step {number}
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>

                {/* Arrow (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 z-20 text-slate-600">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA below process */}
        <div className="text-center mt-16">
          <a href="#contact" className="neon-btn inline-flex items-center gap-2 text-base">
            <Rocket className="w-5 h-5" />
            Start Your Setup Today
          </a>
          <p className="text-slate-500 text-sm mt-4">
            Most clients go live within 72 hours of the strategy call.
          </p>
        </div>
      </div>
    </section>
  )
}
