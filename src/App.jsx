import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
// BeforeAfter removed — content redundant with Problem stats + ROICalculator
import Demo from './components/Demo'
import Features from './components/Features'
import Process from './components/Process'
import ROICalculator from './components/ROICalculator'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LogoBar from './components/LogoBar'
import CtaBridge from './components/CtaBridge'
import ComparisonTable from './components/ComparisonTable'
import UrgencyBanner from './components/UrgencyBanner'
import ChatWidget from './components/ChatWidget'
import ExitIntentPopup from './components/ExitIntentPopup'
import MobileStickyBar from './components/MobileStickyBar'

export default function App() {
  // Scroll-reveal: fade + slide sections into view as they enter the viewport
  useEffect(() => {
    const sections = [...document.querySelectorAll('main section')]
    // Skip hero (first section) — visible on load, no animation needed
    const targets = sections.slice(1)
    targets.forEach(el => el.classList.add('scroll-reveal'))

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('scroll-revealed')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#050508] relative">
      {/* Global background gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.18) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <UrgencyBanner />
        <Navbar />
        <main>
          <Hero />
          <LogoBar />
          <Problem />
          <CtaBridge />
          <Process />
          <Demo />
          <Features />
          <ComparisonTable />
          <ROICalculator />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Floating / overlay elements */}
      <ChatWidget />
      <MobileStickyBar />
      <ExitIntentPopup />
    </div>
  )
}
