import { Header } from '@/app/components/header';
import { HeroSection } from '@/app/components/hero-section';
import { StatsSection } from '@/app/components/stats-section';
import { WhyChooseSection } from '@/app/components/why-choose-section';
import { FeaturesGrid } from '@/app/components/features-grid';
import { TrustedBySection } from '@/app/components/trusted-by-section';
import { TestimonialSection } from '@/app/components/testimonial-section';
import { ContactSection } from '@/app/components/contact-section';
import { AboutSection } from '@/app/components/about-section';
import { FAQSection } from '@/app/components/faq-section';
import { Footer } from '@/app/components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyChooseSection />
        <FeaturesGrid />
        <TrustedBySection />
        <TestimonialSection />
        <ContactSection />
        <AboutSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
