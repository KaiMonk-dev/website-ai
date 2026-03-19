import { useState, useEffect } from 'react'
import { Calendar, Phone, X } from 'lucide-react'

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: 'rgba(5,5,8,0.97)',
        borderTop: '1px solid rgba(139,92,246,0.35)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 -8px 32px rgba(139,92,246,0.2)',
      }}
    >
      <div className="flex items-center gap-2 px-3 py-3 max-w-lg mx-auto">
        <a
          href="https://calendly.com/ascensionfirstai/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 neon-btn text-center py-3 flex items-center justify-center gap-2"
          style={{ fontSize: '0.7rem' }}
        >
          <Calendar className="w-4 h-4" />
          Book Free Strategy Call
        </a>
        <a
          href="tel:+16193337864"
          className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
          style={{
            background: 'rgba(34,211,238,0.15)',
            border: '1px solid rgba(34,211,238,0.35)',
          }}
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 text-cyan-400" />
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 text-slate-500 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
