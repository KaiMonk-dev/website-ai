import { useState } from 'react'
import { Play, Pause, Volume2, Headphones } from 'lucide-react'

export default function AudioDemo() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="glass-card p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(59,130,246,0.05))',
            borderColor: 'rgba(124,58,237,0.2)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Headphones className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Audio Demo</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Hear a Real AI Receptionist Conversation
          </h3>
          <p className="text-slate-400 text-sm mb-8">
            This is an actual call handled by our AI — no actors, no edits.
          </p>

          {/* Waveform visualizer */}
          <div className="flex items-end gap-1 h-16 justify-center mb-6">
            {[...Array(40)].map((_, i) => {
              const heights = [4, 8, 12, 16, 20, 24, 20, 16, 12, 8]
              const h = heights[i % heights.length]
              return (
                <div
                  key={i}
                  className="wave-bar flex-shrink-0"
                  style={{
                    height: playing ? undefined : `${h}px`,
                    animationPlayState: playing ? 'running' : 'paused',
                    animationDelay: `${(i % 8) * 0.1}s`,
                    opacity: playing ? 1 : 0.4,
                  }}
                />
              )
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setPlaying(!playing)}
              className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                boxShadow: playing ? '0 0 30px rgba(124,58,237,0.6)' : '0 0 20px rgba(124,58,237,0.3)',
              }}
            >
              {playing ? (
                <Pause className="w-7 h-7 text-white" />
              ) : (
                <Play className="w-7 h-7 text-white ml-1" />
              )}
            </button>
            <div className="flex items-center gap-2 text-slate-400">
              <Volume2 className="w-4 h-4" />
              <span className="text-sm">2:34 min demo call</span>
            </div>
          </div>

          <p className="text-slate-600 text-xs mt-6">
            * Audio demo coming soon. Call +1 (555) 123-4567 to experience the AI live.
          </p>
        </div>
      </div>
    </section>
  )
}
