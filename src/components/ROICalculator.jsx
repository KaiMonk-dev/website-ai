import { useState, useMemo } from 'react'
import { Calculator, TrendingUp, DollarSign, Phone } from 'lucide-react'

export default function ROICalculator() {
  const [monthly, setMonthly] = useState(200)
  const [missed, setMissed] = useState(30)
  const [dealValue, setDealValue] = useState(500)
  const [conversion, setConversion] = useState(20)

  const results = useMemo(() => {
    const missedCalls = Math.round(monthly * (missed / 100))
    const revenueLost = Math.round(missedCalls * dealValue * (conversion / 100))
    const revenueRecovered = Math.round(revenueLost * 0.85) // 85% recovery rate
    const annualGain = revenueRecovered * 12
    return { missedCalls, revenueLost, revenueRecovered, annualGain }
  }, [monthly, missed, dealValue, conversion])

  const fmt = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[400px] bg-purple-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-green-400">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>
          <h2 className="section-title mb-4">
            Calculate Your{' '}
            <span className="gradient-text">Revenue Recovery</span>
          </h2>
          <p className="section-subtitle">
            See exactly how much revenue you're leaving on the table every month.
          </p>
        </div>

        <div className="glass-card p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-7">
              <h3 className="text-white font-semibold text-lg mb-2">Your Numbers</h3>

              {[
                {
                  label: 'Monthly inbound calls',
                  value: monthly,
                  set: setMonthly,
                  min: 10, max: 2000, step: 10,
                  display: `${monthly} calls`,
                  icon: Phone,
                },
                {
                  label: '% of calls missed',
                  value: missed,
                  set: setMissed,
                  min: 5, max: 80, step: 5,
                  display: `${missed}%`,
                  icon: Phone,
                },
                {
                  label: 'Average deal / job value',
                  value: dealValue,
                  set: setDealValue,
                  min: 50, max: 10000, step: 50,
                  display: fmt(dealValue),
                  icon: DollarSign,
                },
                {
                  label: 'Call-to-client conversion rate',
                  value: conversion,
                  set: setConversion,
                  min: 5, max: 80, step: 5,
                  display: `${conversion}%`,
                  icon: TrendingUp,
                },
              ].map(({ label, value, set, min, max, step, display }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <label className="text-slate-400 text-sm">{label}</label>
                    <span className="text-white font-semibold text-sm">{display}</span>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={e => set(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #7c3aed ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) ${((value - min) / (max - min)) * 100}%)`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-lg mb-2">Your Results</h3>

              {[
                {
                  label: 'Missed calls / month',
                  value: `${results.missedCalls} calls`,
                  color: 'text-red-400',
                  bg: 'rgba(239,68,68,0.08)',
                  border: 'rgba(239,68,68,0.15)',
                },
                {
                  label: 'Revenue lost / month',
                  value: fmt(results.revenueLost),
                  color: 'text-orange-400',
                  bg: 'rgba(249,115,22,0.08)',
                  border: 'rgba(249,115,22,0.15)',
                },
                {
                  label: 'Revenue recovered w/ AI',
                  value: fmt(results.revenueRecovered),
                  color: 'text-green-400',
                  bg: 'rgba(34,197,94,0.08)',
                  border: 'rgba(34,197,94,0.15)',
                },
                {
                  label: 'Potential annual gain',
                  value: fmt(results.annualGain),
                  color: 'text-purple-400',
                  bg: 'rgba(124,58,237,0.1)',
                  border: 'rgba(124,58,237,0.2)',
                  large: true,
                },
              ].map(({ label, value, color, bg, border, large }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl flex items-center justify-between"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <span className="text-slate-400 text-sm">{label}</span>
                  <span className={`font-bold ${color} ${large ? 'text-2xl' : 'text-lg'}`}>
                    {value}
                  </span>
                </div>
              ))}

              <a href="#contact" className="neon-btn text-center mt-2 flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recover This Revenue
              </a>
              <p className="text-slate-600 text-xs text-center">
                Based on industry averages. Actual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
