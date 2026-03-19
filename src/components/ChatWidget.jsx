import { useState } from 'react'
import { MessageCircle, X, Phone, Calendar, Mail } from 'lucide-react'

const options = [
  {
    icon: Calendar,
    label: 'Book a strategy call',
    sub: 'Free 30-min, no pressure',
    href: 'https://calendly.com/ascensionfirstai/30min',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.15)',
    external: true,
  },
  {
    icon: Phone,
    label: 'Call us now',
    sub: '+1 (619) 333-7864',
    href: 'tel:+16193337864',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.15)',
    external: false,
  },
  {
    icon: Mail,
    label: 'Send a message',
    sub: 'Fill out our contact form',
    href: '#contact',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.15)',
    external: false,
  },
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-24 right-4 md:bottom-10 md:right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="glass-card p-4 w-72"
          style={{
            borderColor: 'rgba(139,92,246,0.4)',
            boxShadow: '0 0 40px rgba(139,92,246,0.3), 0 8px 32px rgba(0,0,0,0.6)',
            animation: 'slideUp 0.2s ease',
          }}
        >
          <div className="mb-4">
            <p className="text-white font-bold text-sm">Hey there! 👋</p>
            <p className="text-slate-400 text-xs mt-1">How can we help you today?</p>
          </div>
          <div className="space-y-2">
            {options.map(({ icon: Icon, label, sub, href, color, bg, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                onClick={() => { if (!external) setOpen(false) }}
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] block"
                style={{ background: bg, border: `1px solid ${color}30` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}25`, border: `1px solid ${color}40` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{label}</div>
                  <div className="text-slate-400 text-xs">{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Get help'}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 relative"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
          boxShadow: '0 0 25px rgba(124,58,237,0.6), 0 4px 20px rgba(0,0,0,0.4)',
        }}
      >
        {!open && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white"
            style={{ fontSize: '9px', fontWeight: 700 }}
          >
            1
          </span>
        )}
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  )
}
