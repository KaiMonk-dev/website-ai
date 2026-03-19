import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most clients go live within 72 hours of the strategy call. We handle everything — building the AI, training it on your scripts, integrating your calendar, and testing. You just show up and approve.',
  },
  {
    q: 'Will callers know they\'re talking to an AI?',
    a: 'Our AI is designed to sound natural and human-like. Many callers don\'t realize they\'re speaking with AI. We can also configure it to be transparent about being an AI assistant — it\'s your choice based on your preference.',
  },
  {
    q: 'What integrations do you support?',
    a: 'We integrate with most major CRMs (Salesforce, HubSpot, GoHighLevel), calendars (Google, Outlook, Calendly), and practice management software. We also offer Zapier and API integrations for custom workflows.',
  },
  {
    q: 'Can the AI actually book appointments?',
    a: 'Yes — real-time calendar booking is a core feature. The AI checks your live availability, books the appointment, sends confirmation and reminder SMS/emails to the client, and syncs with your calendar instantly.',
  },
  {
    q: 'What happens if the AI can\'t handle a call?',
    a: 'The AI has intelligent escalation protocols. For complex situations, urgent matters, or explicit requests, it seamlessly transfers the call to a live team member. No caller gets left without help.',
  },
  {
    q: 'How is my data protected?',
    a: 'We take security seriously. Our platform is HIPAA-compliant, SOC2-certified, uses end-to-end encryption, and all data is stored in secure US-based servers. We never sell or share your data.',
  },
  {
    q: 'What languages does the AI support?',
    a: 'Our AI natively supports English and Spanish with high fluency. Additional languages are available for Enterprise plans. We can also handle regional accents and dialects effectively.',
  },
  {
    q: 'Are there long-term contracts?',
    a: 'No contracts, no lock-in. We offer month-to-month plans because we believe in earning your business every month. That said, our 98% retention rate speaks for itself — clients stay because it works.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`glass-card transition-all duration-300 overflow-hidden ${open ? 'border-purple-500/30' : ''}`}
    >
      <button
        className="w-full p-6 flex items-center justify-between text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium text-sm md:text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="pt-2 border-t border-white/10">
            <p className="text-slate-400 text-sm leading-relaxed mt-4">{a}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[400px] bg-purple-600/8 top-1/2 right-0 translate-y-[-50%]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-purple-400">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="section-title mb-4">
            Got Questions?{' '}
            <span className="gradient-text">We've Got Answers</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm">
            Still have questions?{' '}
            <a href="https://calendly.com/ascensionfirstai/30min" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
              Talk to our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
