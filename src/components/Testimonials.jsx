import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Our AI receptionist recovered $18K in the first month alone. Patients who used to hang up are now booking appointments instantly. It's been a game-changer for our practice.",
    name: 'Dr. Sarah Mitchell',
    title: 'Owner, Bright Smile Dental',
    result: '+$18K Revenue',
    resultLabel: 'First Month',
    industry: 'Dental',
    color: 'text-blue-400',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    quote: "We went from 4 qualified leads a week to 12. The AI qualifies every caller before they even reach our attorneys. Our close rate went through the roof.",
    name: 'James Thornton, Esq.',
    title: 'Managing Partner, Thornton Law',
    result: '3x Qualified Leads',
    resultLabel: 'Per Week',
    industry: 'Law',
    color: 'text-purple-400',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
  },
  {
    quote: "40% more showings in the first 60 days. The AI captures every lead even at 11pm when they're browsing listings. I haven't missed a showing inquiry since.",
    name: 'Amanda Reyes',
    title: 'Realtor, Reyes Properties',
    result: '+40% Showings',
    resultLabel: 'In 60 Days',
    industry: 'Real Estate',
    color: 'text-cyan-400',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    quote: "We're booking 60% more test drives and our lot traffic doubled. The AI handles all the initial questions — pricing, availability, financing — and transfers hot leads right to us.",
    name: 'Marcus Johnson',
    title: 'GM, AutoMax Dealership',
    result: '+60% Test Drives',
    resultLabel: 'Booked',
    industry: 'Auto',
    color: 'text-orange-400',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.2)',
  },
  {
    quote: "Emergency calls at 2am now get answered and dispatched immediately. Our emergency revenue grew 85% in 3 months because we stopped missing those critical calls.",
    name: 'Tyler Brooks',
    title: 'Owner, Brooks HVAC Services',
    result: '+85% Revenue',
    resultLabel: 'Emergency Jobs',
    industry: 'HVAC',
    color: 'text-yellow-400',
    bg: 'rgba(234,179,8,0.08)',
    border: 'rgba(234,179,8,0.2)',
  },
  {
    quote: "New member conversions are up 45%. People call to ask about pricing and the AI walks them through membership options and books a free intro class on the spot.",
    name: 'Priya Sharma',
    title: 'Director, Peak Fitness Studio',
    result: '+45% Conversions',
    resultLabel: 'New Members',
    industry: 'Fitness',
    color: 'text-green-400',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.2)',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[400px] bg-blue-600/8 top-0 right-0" />
      <div className="glow-orb w-[400px] h-[300px] bg-purple-600/8 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-yellow-400">
            <Star className="w-4 h-4 fill-yellow-400" />
            Client Results
          </div>
          <h2 className="section-title mb-4">
            Real Results from{' '}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="section-subtitle">
            Don't take our word for it. These are actual results from our clients in the first 90 days.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, title, result, resultLabel, color, bg, border }) => (
            <div key={name} className="glass-card-hover p-6 flex flex-col">
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className={`w-8 h-8 ${color} opacity-40`} />
              </div>

              {/* Result badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold mb-4 self-start"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <span className={color}>{result}</span>
                <span className="text-slate-500">{resultLabel}</span>
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
                "{quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-slate-500 text-xs">{title}</div>
                </div>
                <Stars />
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12 flex flex-col items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="text-2xl font-bold text-white">4.9 / 5.0</div>
          <div className="text-slate-500 text-sm">Average rating across 500+ businesses</div>
        </div>
      </div>
    </section>
  )
}
