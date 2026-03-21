import { useState, useEffect } from 'react'
import { X, Calendar, Flame } from 'lucide-react'

function getTimeUntilFriday() {
  const now = new Date()
  const day = now.getDay() // 0=Sun, 5=Fri, 6=Sat
  // Target: this Friday at 11:59 PM. If it's Sat/Sun, target next Friday.
  const daysUntilFriday = day <= 5 ? 5 - day : 7 - day + 5
  const friday = new Date(now)
  friday.setDate(now.getDate() + daysUntilFriday)
  friday.setHours(23, 59, 59, 999)

  const diff = friday - now
  const totalHours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(totalHours / 24)
  const hours = totalHours % 24

  return { days, hours, totalHours }
}

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(
    () => typeof sessionStorage !== 'undefined' && sessionStorage.getItem('banner_dismissed') === '1'
  )
  const [timeLeft, setTimeLeft] = useState(getTimeUntilFriday)

  useEffect(() => {
    if (dismissed) return
    const t = setTimeout(() => setVisible(true), 12000)
    return () => clearTimeout(t)
  }, [dismissed])

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeUntilFriday()), 60000)
    return () => clearInterval(interval)
  }, [])

  if (dismissed) return null

  const dismiss = () => {
    sessionStorage.setItem('banner_dismissed', '1')
    setDismissed(true)
  }

  const countDisplay = timeLeft.days > 0
    ? `${timeLeft.days}d ${timeLeft.hours}h`
    : `${timeLeft.hours}h`

  const subtext = timeLeft.days === 0
    ? 'Closes tonight — grab your spot before it\'s gone.'
    : timeLeft.days === 1
    ? 'Closes tomorrow — don\'t miss your window this week.'
    : `Free calls close Friday. Book before your spot fills.`

  return (
    <div
      className="fixed bottom-28 left-4 md:bottom-10 md:left-6 z-[55] w-[300px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0) scale(1)' : 'translateX(-24px) scale(0.96)',
        transition: 'opacity 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #1a0505 0%, #200808 60%, #130a00 100%)',
          border: '1px solid rgba(239,68,68,0.55)',
          animation: visible ? 'urgentPulse 2.2s ease-in-out infinite' : 'none',
        }}
      >
        {/* Top hot-line accent */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, #ef4444, #f97316, #ef4444, transparent)' }}
        />

        <div className="p-4 pr-9">
          {/* Header row */}
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 text-orange-400 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 6px #f97316)' }} />
            <span
              className="text-xs font-black tracking-widest uppercase"
              style={{ color: '#f97316', letterSpacing: '0.12em' }}
            >
              This Week Only
            </span>
            <span className="flex-1 h-px" style={{ background: 'rgba(239,68,68,0.25)' }} />
          </div>

          {/* Countdown */}
          <div className="flex items-baseline gap-2 mb-1">
            <span
              className="text-4xl font-black leading-none tabular-nums"
              style={{ color: '#ef4444', textShadow: '0 0 20px rgba(239,68,68,0.7)' }}
            >
              {countDisplay}
            </span>
            <span className="text-white font-bold text-base leading-snug">
              left to book<br />your free call
            </span>
          </div>

          <p className="text-slate-400 text-xs mb-4 leading-relaxed">
            {subtext}
          </p>

          <a
            href="https://calendly.com/ascensionfirstai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #dc2626, #f97316)',
              boxShadow: '0 0 20px rgba(239,68,68,0.55)',
            }}
          >
            <Calendar className="w-3.5 h-3.5" />
            Book My Free Call →
          </a>
        </div>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute top-2.5 right-2.5 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
