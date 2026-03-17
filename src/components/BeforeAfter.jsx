import { X, Check, ArrowRight } from 'lucide-react'

const withoutAI = [
  'Calls go to voicemail',
  'Long hold times',
  'Leads lost daily',
  'Staff burnout',
  'No insights or analytics',
  'Double bookings',
  'Inconsistent experience',
  '$40K+/year per staff member',
]

const withAI = [
  'Instant answer (<1 sec)',
  'Zero hold time — ever',
  'Every lead captured',
  'Staff focused on high-value tasks',
  'Full real-time analytics',
  'Automated booking system',
  'Consistent, branded experience',
  'Fraction of the cost',
]

export default function BeforeAfter() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-purple-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-purple-400">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            The Transformation
          </div>
          <h2 className="section-title mb-4">
            See the{' '}
            <span className="gradient-text">Difference It Makes</span>
          </h2>
          <p className="section-subtitle">
            The gap between losing business and scaling it comes down to who answers the phone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Without AI */}
          <div className="glass-card p-8 border-red-500/20" style={{borderColor: 'rgba(239,68,68,0.2)'}}>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)'}}
              >
                <X className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <div className="text-red-400 text-xs font-semibold uppercase tracking-wider">Without AI</div>
                <div className="text-white font-bold">Traditional Receptionist</div>
              </div>
            </div>
            <div className="space-y-3">
              {withoutAI.map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-400">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{background: 'rgba(239,68,68,0.15)'}}>
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With AI */}
          <div
            className="glass-card p-8 relative overflow-hidden"
            style={{borderColor: 'rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.05)'}}
          >
            {/* Popular badge */}
            <div
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{background: 'linear-gradient(135deg, #7c3aed, #3b82f6)'}}
            >
              ✓ Recommended
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)'}}
              >
                <Check className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-purple-400 text-xs font-semibold uppercase tracking-wider">With Ascension AI</div>
                <div className="text-white font-bold">AI-Powered Receptionist</div>
              </div>
            </div>
            <div className="space-y-3">
              {withAI.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                    style={{background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)'}}
                  >
                    <Check className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-slate-400 text-sm">of Calls Answered</div>
                </div>
                <a
                  href="#contact"
                  className="neon-btn px-6 py-3 text-sm flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
