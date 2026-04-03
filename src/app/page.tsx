import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Slogans from '@/components/Slogans';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Slogans />
      <Community />
      <CTA />
      <Footer />
    </main>
  );
}
