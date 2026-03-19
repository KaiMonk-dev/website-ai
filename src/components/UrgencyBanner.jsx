import { useState, useEffect } from 'react'
import { X, Calendar } from 'lucide-react'

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(
    () => typeof sessionStorage !== 'undefined' && sessionStorage.getItem('banner_dismissed') === '1'
  )

  useEffect(() => {
    if (dismissed) return
    // Delay 3s so hero content loads and is seen first
    const t = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(t)
  }, [dismissed])

  if (dismissed) return null

  const dismiss = () => {
    sessionStorage.setItem('banner_dismissed', '1')
    setDismissed(true)
  }

  return (
    <div
      className="fixed bottom-28 left-4 md:bottom-10 md:left-6 z-[55] max-w-[300px] w-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        className="glass-card p-4 relative"
        style={{
          borderColor: 'rgba(239,68,68,0.4)',
          boxShadow: '0 0 30px rgba(239,68,68,0.12), 0 8px 32px rgba(0,0,0,0.6)',
        }}
      >
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute top-2.5 right-2.5 text-slate-600 hover:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3 pr-5">
          {/* Red pulse indicator */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.35)' }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse"
              style={{ display: 'block' }}
            />
          </div>

          <div>
            <p className="text-white text-sm font-bold leading-snug mb-1">
              Only 3 slots left this week!
            </p>
            <p className="text-slate-400 text-xs mb-3 leading-relaxed">
              Onboarding fills fast — reserve your spot before it's gone.
            </p>
            <a
              href="https://calendly.com/ascensionfirstai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                boxShadow: '0 0 16px rgba(124,58,237,0.4)',
              }}
            >
              <Calendar className="w-3 h-3" />
              Book Free Strategy Call →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
