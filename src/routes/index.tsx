import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/lib/i18n";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustedTech } from "@/components/site/TrustedTech";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <TrustedTech />
          <Services />
          <Portfolio />
          <WhyChooseUs />
          <Process />
          <About />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
        <Toaster position="top-center" />
      </div>
    </I18nProvider>
  );
}
