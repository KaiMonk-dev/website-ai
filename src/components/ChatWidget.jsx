import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Phone, Calendar, Mail, ArrowLeft, Send, HelpCircle } from 'lucide-react'

const actions = [
  {
    icon: Calendar,
    label: 'Book a strategy call',
    sub: 'Free 30-min, zero pressure',
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

const faqs = [
  {
    q: 'How much does it cost?',
    pattern: /price|cost|how much|afford|plan|pricing|expensive|cheap/i,
    a: 'Plans start at $497/month — unlimited minutes, no contracts. Our Professional plan is $997/mo, and we have custom Enterprise pricing. Book a free call and we\'ll recommend the exact right fit for your business.',
  },
  {
    q: 'How fast can I go live?',
    pattern: /fast|quick|setup|go.?live|how.?long|72|start|launch|ready|days/i,
    a: 'Most businesses go live within 72 hours. We handle the entire setup — you just forward your phone number to us. Zero technical work on your end.',
  },
  {
    q: 'What industries do you serve?',
    pattern: /industr|medical|dental|law|real.?estate|restaurant|home.?service|work.?for|type.?of/i,
    a: 'Medical & dental offices, law firms, real estate agents, home service companies, restaurants, auto dealerships, fitness studios, and more. If your business takes phone calls, we can help.',
  },
  {
    q: 'Can I cancel anytime?',
    pattern: /cancel|contract|lock.?in|commitment|refund|money.?back|guarantee|stuck/i,
    a: 'Yes — no contracts, no lock-ins. Cancel anytime with 30 days notice. We also back every plan with a 30-day money-back guarantee.',
  },
  {
    q: 'Is it HIPAA compliant?',
    pattern: /hipaa|comply|secure|complian|soc2?|data|privacy|patient/i,
    a: 'Yes, fully. Our platform is HIPAA compliant for medical & dental practices and SOC2 certified. Patient data is always encrypted and protected.',
  },
  {
    q: 'How does it work?',
    pattern: /how.?does|how.?it.?work|explain|process|what.?is.?it|what.?does.?it/i,
    a: 'Your business number forwards to our AI. It answers instantly 24/7, qualifies leads, books appointments into your calendar, and sends automated follow-up texts — no human receptionist needed.',
  },
]

function matchFaq(input) {
  return faqs.find(f => f.pattern.test(input)) || null
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState('menu') // 'menu' | 'answer'
  const [answer, setAnswer] = useState(null)
  const [question, setQuestion] = useState('')
  const [inputText, setInputText] = useState('')
  const [wiggle, setWiggle] = useState(false)
  const [tooltip, setTooltip] = useState(false)
  const inputRef = useRef(null)

  // Wiggle + tooltip periodically to attract attention
  useEffect(() => {
    const fire = () => {
      if (!open) {
        setWiggle(true)
        setTooltip(true)
        setTimeout(() => {
          setWiggle(false)
          setTimeout(() => setTooltip(false), 4000)
        }, 1500)
      }
    }
    const first = setTimeout(fire, 5000)
    const interval = setInterval(fire, 22000)
    return () => { clearTimeout(first); clearInterval(interval) }
  }, [open])

  const showAnswer = (q, a) => {
    setQuestion(q)
    setAnswer(a)
    setView('answer')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputText.trim()) return
    const match = matchFaq(inputText)
    if (match) {
      showAnswer(match.q, match.a)
    } else {
      showAnswer(
        inputText,
        "Great question — our team can give you a tailored answer in minutes on a quick call. It's free, no commitment required."
      )
    }
    setInputText('')
  }

  const resetView = () => {
    setView('menu')
    setAnswer(null)
    setQuestion('')
  }

  const toggleOpen = () => {
    setOpen(o => {
      if (!o) resetView()
      return !o
    })
  }

  return (
    <div className="fixed bottom-24 right-4 md:bottom-10 md:right-6 z-50 flex flex-col items-end gap-3">

      {/* Panel */}
      {open && (
        <div
          className="glass-card w-96"
          style={{
            borderColor: 'rgba(139,92,246,0.45)',
            boxShadow: '0 0 50px rgba(139,92,246,0.25), 0 8px 32px rgba(0,0,0,0.7)',
            animation: 'slideUp 0.22s ease',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header bar */}
          <div
            className="px-4 py-3.5 flex-shrink-0 flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(59,130,246,0.12))',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                boxShadow: '0 0 14px rgba(124,58,237,0.55)',
              }}
            >
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">Ascension First AI</p>
              <p className="text-green-400 text-xs flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                Online now — reply in seconds
              </p>
            </div>
            <button
              onClick={toggleOpen}
              className="text-slate-500 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1" style={{ overscrollBehavior: 'contain' }}>

            {/* MENU VIEW */}
            {view === 'menu' && (
              <div className="p-4 space-y-4">
                <p className="text-slate-300 text-sm">Hey there! 👋 How can we help you today?</p>

                {/* Quick action buttons */}
                <div className="space-y-2">
                  {actions.map(({ icon: Icon, label, sub, href, color, bg, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      onClick={() => { if (!external) { setOpen(false); resetView() } }}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] block"
                      style={{ background: bg, border: `1px solid ${color}30` }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}20`, border: `1px solid ${color}40` }}
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

                {/* FAQ divider */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
                  <span className="text-slate-600 text-xs flex items-center gap-1 whitespace-nowrap">
                    <HelpCircle className="w-3 h-3" /> Common questions
                  </span>
                  <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
                </div>

                {/* FAQ chips */}
                <div className="flex flex-wrap gap-1.5">
                  {faqs.map(({ q, a }) => (
                    <button
                      key={q}
                      onClick={() => showAnswer(q, a)}
                      className="px-2.5 py-1.5 rounded-full text-xs text-slate-300 hover:text-white transition-all duration-200 hover:scale-[1.03] text-left"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Free-text input */}
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    placeholder="Or type your question…"
                    className="flex-1 px-3 py-2.5 rounded-xl text-xs text-white placeholder-slate-600 outline-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.55)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.09)'}
                  />
                  <button
                    type="submit"
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', boxShadow: '0 0 12px rgba(124,58,237,0.4)' }}
                    aria-label="Send"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </form>
              </div>
            )}

            {/* ANSWER VIEW */}
            {view === 'answer' && (
              <div className="p-4 space-y-4">
                <button
                  onClick={resetView}
                  className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-xs"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Back to options
                </button>

                {/* Question echo */}
                <div
                  className="px-3 py-2 rounded-xl text-xs text-slate-400 italic"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  "{question}"
                </div>

                {/* Answer */}
                <div
                  className="px-4 py-3.5 rounded-xl text-sm text-white leading-relaxed"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(59,130,246,0.08))',
                    border: '1px solid rgba(139,92,246,0.25)',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  {answer}
                </div>

                {/* CTA fallback */}
                <div className="space-y-2 pt-1">
                  <p className="text-slate-500 text-xs text-center">Still have questions? We'll cover everything on a quick call.</p>
                  <a
                    href="https://calendly.com/ascensionfirstai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn w-full flex items-center justify-center gap-2 py-3 text-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book My Free Strategy Call
                  </a>
                  <a
                    href="tel:+16193337864"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Phone className="w-3 h-3" />
                    Or call +1 (619) 333-7864
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tooltip speech bubble */}
      <div
        className="absolute bottom-[76px] right-0 pointer-events-none select-none"
        style={{ opacity: tooltip && !open ? 1 : 0, transition: 'opacity 0.35s ease' }}
      >
        <div
          className="glass-card px-5 py-3.5 text-white"
          style={{
            borderColor: 'rgba(139,92,246,0.55)',
            boxShadow: '0 0 28px rgba(139,92,246,0.35)',
            whiteSpace: 'nowrap',
          }}
        >
          <p className="font-semibold text-sm leading-snug">Have a question? 👋</p>
          <p className="text-slate-400 text-xs mt-1">We answer instantly — try us!</p>
          {/* Triangle pointer */}
          <div
            className="absolute -bottom-[7px] right-6"
            style={{
              width: 0, height: 0,
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              borderTop: '7px solid rgba(255,255,255,0.08)',
            }}
          />
        </div>
      </div>

      {/* Floating toggle button */}
      <button
        onClick={toggleOpen}
        aria-label={open ? 'Close chat' : 'Get help'}
        className="w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 relative"
        style={{
          background: 'linear-gradient(135deg, #6d28d9, #7c3aed, #3b82f6)',
          boxShadow: open
            ? '0 0 35px rgba(124,58,237,0.75), 0 4px 24px rgba(0,0,0,0.45)'
            : '0 0 35px rgba(124,58,237,0.75), 0 0 70px rgba(124,58,237,0.25), 0 4px 24px rgba(0,0,0,0.45)',
          animation: wiggle && !open ? 'wiggle 0.5s ease' : undefined,
        }}
      >
        {/* Outer pulse rings — layered for depth */}
        {!open && (
          <>
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ border: '2px solid rgba(139,92,246,0.6)', animation: 'pulseRing 2.2s ease-out infinite' }}
            />
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ border: '2px solid rgba(99,102,241,0.35)', animation: 'pulseRing 2.2s ease-out infinite 0.7s' }}
            />
          </>
        )}

        {/* Notification badge */}
        {!open && (
          <div
            className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center font-black"
            style={{
              background: 'linear-gradient(135deg, #dc2626, #f97316)',
              fontSize: '10px',
              color: '#fff',
              boxShadow: '0 0 14px rgba(239,68,68,0.85)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          >
            1
          </div>
        )}

        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  )
}
