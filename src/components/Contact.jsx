import { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle, ArrowRight, ArrowLeft, Calendar } from 'lucide-react'

const industries = [
  'Medical & Dental', 'Law Firm', 'Real Estate', 'Auto Dealership',
  'Home Services', 'Restaurant', 'Fitness & Wellness', 'Property Management', 'Other',
]

const callVolumes = ['< 50 calls/mo', '50–200 calls/mo', '200–500 calls/mo', '500+ calls/mo']

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvrzjgo'

export default function Contact() {
  const [step, setStep] = useState(1)
  const [booked, setBooked] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '',
    industry: '', volume: '', message: '',
  })
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => {
    setForm(prev => ({ ...prev, [k]: e.target.value }))
    if (errors[k]) setErrors(prev => ({ ...prev, [k]: false }))
  }

  const validateStep1 = () => {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.business.trim()) e.business = true
    if (!form.email.trim()) e.email = true
    if (!form.phone.trim()) e.phone = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.industry) e.industry = true
    if (!form.volume) e.volume = true
    if (!form.message.trim()) e.message = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (validateStep1()) setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep2()) return
    setSubmitting(true)
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `New lead: ${form.name} — ${form.business}`,
        }),
      })
    } catch {
      // Silent fail — still advance so user can book their call
    } finally {
      setSubmitting(false)
      setStep(3)
    }
  }

  const inputStyle = (hasError) => ({
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${hasError ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.08)'}`,
  })

  const focusStyle = 'rgba(124,58,237,0.5)'

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[700px] h-[500px] bg-purple-600/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-purple-400">
            <Phone className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="section-title mb-4">
            Book Your Free{' '}
            <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="section-subtitle">
            Takes 2 minutes. We'll map out your custom AI solution with zero pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-4">What to expect</h3>
              <ul className="space-y-3">
                {[
                  'Free 30-minute strategy call',
                  'We analyze your business & call patterns',
                  'Custom AI solution proposal',
                  'Live demo of your AI in action',
                  'Clear pricing, zero pressure',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h3 className="text-white font-semibold mb-2">Contact Us Directly</h3>
              {[
                { icon: Phone, text: '+1 (858) 434-7041', href: 'tel:+18584347041' },
                { icon: Mail,  text: 'ascensionfirst.ai@gmail.com', href: 'mailto:ascensionfirst.ai@gmail.com' },
                { icon: MapPin, text: 'United States', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <div className="feature-icon w-8 h-8">
                    <Icon className="w-4 h-4 text-purple-400" />
                  </div>
                  {text}
                </a>
              ))}
            </div>

            <div
              className="glass-card p-6 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.05))' }}
            >
              <div className="text-3xl font-black gradient-text mb-1">72 hrs</div>
              <div className="text-slate-400 text-sm">Average time from call to go-live</div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">

              {/* Step 3 — Book your call */}
              {step === 3 ? (
                <div className="text-center py-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)' }}
                  >
                    <CheckCircle className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Your info is saved!</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    One last step — pick a time that works for you and lock in your free 30-minute strategy call.
                  </p>

                  {booked ? (
                    <div className="space-y-4">
                      <div className="text-green-400 font-semibold text-lg">🎉 You're booked!</div>
                      <p className="text-slate-400 text-sm">Check your email for the confirmation. We'll see you on the call!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <a
                        href="https://calendly.com/ascensionfirstai/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setBooked(true)}
                        className="neon-btn w-full flex items-center justify-center gap-2 text-base"
                      >
                        <Calendar className="w-5 h-5" />
                        Book My Free Strategy Call
                      </a>
                      <a
                        href="https://calendar.app.google/QCrjgfWodrJuUMHq7"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setBooked(true)}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01]"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.12)',
                        }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="17" rx="2" stroke="#4ade80" strokeWidth="1.5"/>
                          <path d="M3 9h18" stroke="#4ade80" strokeWidth="1.5"/>
                          <path d="M8 2v3M16 2v3" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        Open Google Calendar instead
                      </a>
                      <button
                        onClick={() => setStep(2)}
                        className="text-slate-500 text-xs hover:text-slate-400 transition-colors w-full mt-2"
                      >
                        ← Go back and edit my answers
                      </button>
                    </div>
                  )}
                </div>

              ) : (
                <>
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      {['Your Info', 'Your Business', 'Book Call'].map((label, i) => {
                        const stepNum = i + 1
                        const isActive = step === stepNum
                        const isDone = step > stepNum
                        return (
                          <div key={label} className="flex items-center gap-2 flex-1">
                            <div className="flex flex-col items-center gap-1">
                              <div
                                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                                style={{
                                  background: isDone
                                    ? 'rgba(52,211,153,0.2)'
                                    : isActive
                                    ? 'linear-gradient(135deg, #7c3aed, #3b82f6)'
                                    : 'rgba(255,255,255,0.06)',
                                  border: isDone
                                    ? '1px solid rgba(52,211,153,0.5)'
                                    : isActive
                                    ? '1px solid rgba(139,92,246,0.6)'
                                    : '1px solid rgba(255,255,255,0.1)',
                                  color: isDone ? '#34d399' : isActive ? '#fff' : '#4b5563',
                                }}
                              >
                                {isDone ? '✓' : stepNum}
                              </div>
                              <span
                                className="text-xs whitespace-nowrap hidden sm:block"
                                style={{ color: isActive ? '#c084fc' : isDone ? '#34d399' : '#4b5563' }}
                              >
                                {label}
                              </span>
                            </div>
                            {i < 2 && (
                              <div
                                className="flex-1 h-px mx-2 mb-4 sm:mb-0 transition-all duration-500"
                                style={{ background: step > stepNum ? 'rgba(52,211,153,0.4)' : 'rgba(255,255,255,0.08)' }}
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 1 — Your Info */}
                  {step === 1 && (
                    <form onSubmit={handleNext} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { label: 'Your Name',      key: 'name',     placeholder: 'John Smith',          type: 'text'  },
                          { label: 'Business Name',  key: 'business', placeholder: 'Acme Corp',           type: 'text'  },
                          { label: 'Email Address',  key: 'email',    placeholder: 'john@acme.com',       type: 'email' },
                          { label: 'Phone Number',   key: 'phone',    placeholder: '+1 (555) 000-0000',   type: 'tel'   },
                        ].map(({ label, key, placeholder, type }) => (
                          <div key={key}>
                            <label className="block text-slate-400 text-sm mb-2">
                              {label} <span className="text-red-400">*</span>
                            </label>
                            <input
                              type={type}
                              placeholder={placeholder}
                              value={form[key]}
                              onChange={set(key)}
                              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 transition-all duration-200 outline-none"
                              style={inputStyle(errors[key])}
                              onFocus={e => e.target.style.borderColor = focusStyle}
                              onBlur={e => e.target.style.borderColor = errors[key] ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.08)'}
                            />
                            {errors[key] && <p className="text-red-400 text-xs mt-1">This field is required.</p>}
                          </div>
                        ))}
                      </div>

                      <button type="submit" className="neon-btn w-full flex items-center justify-center gap-2 text-base">
                        Next — Tell Us About Your Business
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  )}

                  {/* Step 2 — Your Business */}
                  {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-slate-400 text-sm mb-2">
                            Industry <span className="text-red-400">*</span>
                          </label>
                          <select
                            value={form.industry}
                            onChange={set('industry')}
                            className="w-full px-4 py-3 rounded-xl text-sm text-white transition-all duration-200 outline-none"
                            style={inputStyle(errors.industry)}
                            onFocus={e => e.target.style.borderColor = focusStyle}
                            onBlur={e => e.target.style.borderColor = errors.industry ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.08)'}
                          >
                            <option value="" className="bg-[#0f0f1a]">Select industry...</option>
                            {industries.map(i => <option key={i} value={i} className="bg-[#0f0f1a]">{i}</option>)}
                          </select>
                          {errors.industry && <p className="text-red-400 text-xs mt-1">Please select an industry.</p>}
                        </div>

                        <div>
                          <label className="block text-slate-400 text-sm mb-2">
                            Monthly Call Volume <span className="text-red-400">*</span>
                          </label>
                          <select
                            value={form.volume}
                            onChange={set('volume')}
                            className="w-full px-4 py-3 rounded-xl text-sm text-white transition-all duration-200 outline-none"
                            style={inputStyle(errors.volume)}
                            onFocus={e => e.target.style.borderColor = focusStyle}
                            onBlur={e => e.target.style.borderColor = errors.volume ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.08)'}
                          >
                            <option value="" className="bg-[#0f0f1a]">Select volume...</option>
                            {callVolumes.map(v => <option key={v} value={v} className="bg-[#0f0f1a]">{v}</option>)}
                          </select>
                          {errors.volume && <p className="text-red-400 text-xs mt-1">Please select a call volume.</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-sm mb-2">
                          Tell us about your business <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          placeholder="Any specific challenges, goals, or questions you have..."
                          value={form.message}
                          onChange={set('message')}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 resize-none transition-all duration-200 outline-none"
                          style={inputStyle(errors.message)}
                          onFocus={e => e.target.style.borderColor = focusStyle}
                          onBlur={e => e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.08)'}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">Please tell us a bit about your business.</p>}
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="outline-btn flex items-center gap-2 text-sm px-5"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </button>
                        <button type="submit" disabled={submitting} className="neon-btn flex-1 flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                          <Send className="w-5 h-5" />
                          {submitting ? 'Sending…' : 'Submit & Book My Call'}
                        </button>
                      </div>

                      <p className="text-slate-600 text-xs text-center">
                        By submitting, you agree to our Privacy Policy. No spam, ever.
                      </p>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
