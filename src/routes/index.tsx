import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/lib/i18n";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const title = "MoDev — Freelance Web Developer & Digital Creator";
const description =
  "I'm MoDev, a freelance web developer. I design and build fast, responsive, custom websites from scratch — selected projects, services and direct contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
          <Portfolio />
          <Services />
          <About />
          <WhyChooseUs />
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
