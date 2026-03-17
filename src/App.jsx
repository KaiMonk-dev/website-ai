import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Problem from './components/Problem'
import BeforeAfter from './components/BeforeAfter'
import Demo from './components/Demo'
import Features from './components/Features'
import AudioDemo from './components/AudioDemo'
import Process from './components/Process'
import Industries from './components/Industries'
import ROICalculator from './components/ROICalculator'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <Problem />
          <BeforeAfter />
          <Demo />
          <Features />
          <AudioDemo />
          <Process />
          <Industries />
          <ROICalculator />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
