import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Locale } from "@/config/languages";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  return (
    <>
      <Navbar lang={lang} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <ProjectsSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
      <ScrollToTop />
    </>
  );
}
