// src/app/page.tsx — Optima Home
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TheProblem from '@/components/TheProblem'
import HowItWorks from '@/components/HowItWorks'
import Deductions from '@/components/Deductions'
import DocumentVault from '@/components/DocumentVault'
import PayslipBridge from '@/components/PayslipBridge'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <HowItWorks />
        <Deductions />
        <DocumentVault />
        <PayslipBridge />
        <Testimonials />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
