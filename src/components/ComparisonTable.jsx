import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

const CALENDLY = 'https://calendly.com/ascensionfirstai/30min'

const rows = [
  { label: 'Available 24/7',            ai: true,  human: false },
  { label: 'Answers in < 1 second',     ai: true,  human: false },
  { label: 'Handles 100% of calls',     ai: true,  human: false },
  { label: 'Books appointments live',   ai: true,  human: false },
  { label: 'Qualifies leads on call',   ai: true,  human: false },
  { label: 'Sends SMS follow-ups',      ai: true,  human: false },
  { label: 'HIPAA & SOC2 compliant',    ai: true,  human: false },
  { label: 'Monthly salary / overhead', ai: false, human: true,  aiLabel: 'None', humanLabel: '$3,500–$5,000/mo' },
  { label: 'Sick days / turnover risk', ai: false, human: true,  aiLabel: 'Never', humanLabel: 'Constant' },
  { label: 'Training required',         ai: false, human: true,  aiLabel: 'We handle it', humanLabel: 'Weeks of onboarding' },
]

function Cell({ val, label }) {
  if (typeof val === 'boolean') {
    return val
      ? <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
      : <XCircle className="w-5 h-5 text-red-500/60 mx-auto" />
  }
  return <span className="text-slate-400 text-sm">{label}</span>
}

export default function ComparisonTable() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[300px] bg-indigo-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-indigo-400">
            <CheckCircle2 className="w-4 h-4" />
            Why Switch
          </div>
          <h2 className="section-title mb-4">
            AI Receptionist vs.{' '}
            <span className="gradient-text">Human Receptionist</span>
          </h2>
          <p className="section-subtitle">
            Same professional experience for your callers — a fraction of the cost, with zero downtime.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Column headers */}
          <div className="grid grid-cols-3 text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="py-4 px-6 text-slate-500">Capability</div>
            <div
              className="py-4 px-6 text-center text-white rounded-t-xl"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(99,102,241,0.15))' }}
            >
              Ascension First AI
            </div>
            <div className="py-4 px-6 text-center text-slate-500">Human Receptionist</div>
          </div>

          {/* Rows */}
          {rows.map(({ label, ai, human, aiLabel, humanLabel }, i) => (
            <div
              key={label}
              className="grid grid-cols-3 items-center text-sm"
              style={{
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div className="py-3.5 px-6 text-slate-300">{label}</div>
              <div
                className="py-3.5 px-6 text-center"
                style={{ background: 'rgba(139,92,246,0.06)' }}
              >
                <Cell val={ai} label={aiLabel} />
              </div>
              <div className="py-3.5 px-6 text-center">
                <Cell val={human} label={humanLabel} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn inline-flex items-center gap-2"
          >
            Get Your AI Receptionist Live in 72 Hours
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-slate-600 text-xs mt-3">No contracts. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}
