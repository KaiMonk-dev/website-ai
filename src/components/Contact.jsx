import { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

const industries = [
  'Medical & Dental', 'Law Firm', 'Real Estate', 'Auto Dealership',
  'Home Services', 'Restaurant', 'Fitness & Wellness', 'Property Management', 'Other',
]

const callVolumes = ['< 50 calls/mo', '50–200 calls/mo', '200–500 calls/mo', '500+ calls/mo']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '',
    industry: '', volume: '', message: '',
  })

  const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            Let's Build Your{' '}
            <span className="gradient-text">AI Receptionist</span>
          </h2>
          <p className="section-subtitle">
            Book a free 30-minute strategy call. We'll map out your custom AI solution with no pressure.
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
                { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: Mail, text: 'hello@ascensionfirstai.com', href: 'mailto:hello@ascensionfirstai.com' },
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
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)' }}
                  >
                    <CheckCircle className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    We'll be in touch within 24 hours!
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Thank you for reaching out. Our team will review your submission and schedule your free strategy call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { label: 'Your Name', key: 'name', placeholder: 'John Smith', type: 'text', required: true },
                      { label: 'Business Name', key: 'business', placeholder: 'Acme Corp', type: 'text', required: true },
                      { label: 'Email Address', key: 'email', placeholder: 'john@acme.com', type: 'email', required: true },
                      { label: 'Phone Number', key: 'phone', placeholder: '+1 (555) 000-0000', type: 'tel', required: true },
                    ].map(({ label, key, placeholder, type, required }) => (
                      <div key={key}>
                        <label className="block text-slate-400 text-sm mb-2">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[key]}
                          onChange={set(key)}
                          required={required}
                          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 transition-all duration-200 outline-none focus:border-purple-500/50"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                          onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Industry</label>
                      <select
                        value={form.industry}
                        onChange={set('industry')}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white transition-all duration-200 outline-none"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <option value="" className="bg-[#0f0f1a]">Select industry...</option>
                        {industries.map(i => (
                          <option key={i} value={i} className="bg-[#0f0f1a]">{i}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Monthly Call Volume</label>
                      <select
                        value={form.volume}
                        onChange={set('volume')}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white transition-all duration-200 outline-none"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <option value="" className="bg-[#0f0f1a]">Select volume...</option>
                        {callVolumes.map(v => (
                          <option key={v} value={v} className="bg-[#0f0f1a]">{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Tell us about your business (optional)
                    </label>
                    <textarea
                      placeholder="Any specific challenges, goals, or questions you have..."
                      value={form.message}
                      onChange={set('message')}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 resize-none transition-all duration-200 outline-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  <button type="submit" className="neon-btn w-full flex items-center justify-center gap-2 text-base">
                    <Send className="w-5 h-5" />
                    Book My Free Strategy Call
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    By submitting, you agree to our Privacy Policy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
