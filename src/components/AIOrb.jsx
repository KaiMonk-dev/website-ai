import { useState } from 'react'
import { Phone, CheckCircle, Calendar, MessageSquare, Zap } from 'lucide-react'

const activities = [
  { icon: Phone,         label: 'Call Answered',       color: '#22d3ee',  delay: '0s'   },
  { icon: Calendar,      label: 'Appointment Booked',  color: '#c084fc',  delay: '1s'   },
  { icon: CheckCircle,   label: 'Lead Captured',       color: '#34d399',  delay: '2s'   },
  { icon: MessageSquare, label: 'SMS Follow-up Sent',  color: '#f472b6',  delay: '3s'   },
]

const stats = [
  { value: '24/7',    label: 'Always Active'      },
  { value: '< 1s',   label: 'Response Time'       },
  { value: '100%',   label: 'Calls Answered'      },
]

// Ring sizes (px) centered on the orb
const ringSizes = [120, 180, 240, 300]

export default function AIOrb() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-slate-300 font-medium">Live Right Now</span>
        </div>

        <h2 className="section-title mb-4">
          Your AI{' '}
          <span className="gradient-text">Never Sleeps</span>
        </h2>
        <p className="section-subtitle mb-16">
          Every second of every day, your receptionist is live — answering calls, booking
          appointments, and capturing revenue while you focus on what matters.
        </p>

        {/* Orb area */}
        <div className="flex justify-center mb-16">
          <div
            className="relative flex items-center justify-center"
            style={{ width: 340, height: 340 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Pulse rings */}
            {ringSizes.map((size, i) => (
              <div
                key={i}
                className="orb-ring absolute"
                style={{
                  width: size,
                  height: size,
                  marginLeft: -(size / 2),
                  marginTop: -(size / 2),
                  top: '50%',
                  left: '50%',
                  animationDelay: `${i * 0.75}s`,
                  animationDuration: hovered ? '1.8s' : '3s',
                  borderColor: i % 2 === 0
                    ? 'rgba(139,92,246,0.5)'
                    : 'rgba(34,211,238,0.35)',
                }}
              />
            ))}

            {/* Core orb */}
            <div
              className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1, #22d3ee)',
                boxShadow: hovered
                  ? '0 0 60px rgba(139,92,246,0.9), 0 0 120px rgba(99,102,241,0.5), 0 0 180px rgba(34,211,238,0.3)'
                  : '0 0 35px rgba(139,92,246,0.6), 0 0 70px rgba(139,92,246,0.25)',
                transform: hovered ? 'scale(1.08)' : 'scale(1)',
                transition: 'box-shadow 0.4s ease, transform 0.3s ease',
              }}
            >
              <Phone className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>

            {/* Activity chips positioned around the orb */}
            {activities.map(({ icon: Icon, label, color, delay }, i) => {
              // Position: top, right, bottom, left
              const positions = [
                { top: 10,   left: '50%', transform: 'translateX(-50%)' },
                { top: '50%',right: -10,  transform: 'translateY(-50%)' },
                { bottom: 10,left: '50%', transform: 'translateX(-50%)' },
                { top: '50%',left: -10,   transform: 'translateY(-50%)' },
              ]
              const pos = positions[i]

              return (
                <div
                  key={label}
                  className="activity-chip absolute glass-card px-3 py-2 flex items-center gap-2 whitespace-nowrap text-sm font-medium"
                  style={{
                    ...pos,
                    borderColor: `${color}33`,
                    animationDelay: delay,
                    color,
                  }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                  <span className="text-white text-xs">{label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="glass-card px-10 py-5 flex-1 max-w-[200px] mx-auto sm:mx-0"
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{
                  background: 'linear-gradient(135deg, #c084fc, #818cf8, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {value}
              </div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
