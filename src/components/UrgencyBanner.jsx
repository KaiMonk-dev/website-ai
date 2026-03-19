import { useState } from 'react'
import { X } from 'lucide-react'

export default function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(
    () => typeof sessionStorage !== 'undefined' && sessionStorage.getItem('banner_dismissed') === '1'
  )

  if (dismissed) return null

  const dismiss = () => {
    sessionStorage.setItem('banner_dismissed', '1')
    setDismissed(true)
  }

  return (
    <div
      className="relative z-[60] py-2.5 px-10 text-center text-sm font-medium text-white"
      style={{ background: 'linear-gradient(90deg, #6d28d9, #4f46e5, #0ea5e9)' }}
    >
      <span className="inline-flex items-center gap-2 justify-center flex-wrap">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block" />
          <strong>Only 3 onboarding slots left this month</strong>
        </span>
        <span className="hidden sm:inline text-white/60">—</span>
        <a
          href="https://calendly.com/ascensionfirstai/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-white/50 font-bold hover:text-yellow-300 transition-colors whitespace-nowrap"
        >
          Book your free strategy call →
        </a>
      </span>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
