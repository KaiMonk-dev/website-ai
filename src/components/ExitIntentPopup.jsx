import { useState, useEffect } from 'react'
import { X, Calendar } from 'lucide-react'

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('exit_popup_shown') === '1') return

    const show = () => {
      setVisible(true)
      sessionStorage.setItem('exit_popup_shown', '1')
    }

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) show()
    }

    // Desktop: detect cursor leaving to browser chrome
    document.addEventListener('mouseleave', handleMouseLeave)

    // Mobile: show after 50s of page time (no mouseleave on touch)
    const mobileTimer = window.innerWidth < 768
      ? setTimeout(show, 50000)
      : null

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (mobileTimer) clearTimeout(mobileTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }}
      onClick={() => setVisible(false)}
    >
      <div
        className="glass-card p-8 max-w-md w-full relative text-center"
        style={{
          borderColor: 'rgba(139,92,246,0.5)',
          boxShadow: '0 0 80px rgba(139,92,246,0.3)',
          animation: 'slideUp 0.25s ease',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(59,130,246,0.2))',
            border: '1px solid rgba(139,92,246,0.4)',
          }}
        >
          <Calendar className="w-8 h-8 text-purple-400" />
        </div>

        <h3 className="text-white text-xl font-bold mb-2">Wait — Before You Go</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          See if AI is right for your business in 60 seconds. Book a free strategy call — zero pressure, zero commitment.
        </p>

        <div className="space-y-3">
          <a
            href="https://calendly.com/ascensionfirstai/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setVisible(false)}
            className="neon-btn w-full flex items-center justify-center gap-2 text-sm"
          >
            <Calendar className="w-4 h-4" />
            Book My Free Strategy Call
          </a>
          <button
            onClick={() => setVisible(false)}
            className="text-slate-500 text-xs hover:text-slate-400 transition-colors w-full pt-1"
          >
            No thanks, I'll pass on more revenue
          </button>
        </div>
      </div>
    </div>
  )
}
