import { ArrowRight, Phone } from 'lucide-react'

const CALENDLY = 'https://calendly.com/ascensionfirstai/30min'

export default function CtaBridge() {
  return (
    <div className="relative py-10 overflow-hidden">
      {/* Subtle gradient line top + bottom */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-6"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(99,102,241,0.08) 50%, rgba(6,182,212,0.08) 100%)',
            border: '1px solid rgba(139,92,246,0.25)',
          }}
        >
          <div>
            <p className="text-white font-semibold text-lg leading-snug">
              Ready to stop losing calls to competitors?
            </p>
            <p className="text-slate-400 text-sm mt-1">
              See exactly how we'd set this up for your business — free 30-min call.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-flex items-center gap-2 text-sm whitespace-nowrap"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+1-800-000-0000"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
