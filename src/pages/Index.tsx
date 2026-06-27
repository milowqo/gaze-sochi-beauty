import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Gallery } from "@/components/Gallery";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { MapSection } from "@/components/MapSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    ym?: (counterId: number, method: string, goal: string, params?: Record<string, unknown>) => void;
  }
}

const YANDEX_METRIKA_COUNTER_ID = 105798476;

const Index = () => {
  const trackGoal = (goal: string, params?: Record<string, unknown>) => {
    window.dataLayer?.push({ event: goal, ...params });
    window.ym?.(YANDEX_METRIKA_COUNTER_ID, "reachGoal", goal, params);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBook = (placement: string) => trackGoal("book_click", { placement });
  const handleContact = (channel: string) => trackGoal("contact_click", { channel });

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.classList.contains("animate-on-scroll")) el.classList.add("scroll-animate");
          if (el.classList.contains("animate-on-scroll-left")) el.classList.add("scroll-animate-left");
          if (el.classList.contains("animate-on-scroll-right")) el.classList.add("scroll-animate-right");
          if (el.classList.contains("animate-on-scroll-scale")) el.classList.add("scroll-animate-scale");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const selector = ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale";
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onBook={handleBook} onScrollTo={scrollToSection} />
      <Gallery />
      <FeaturesSection />
      <ServicesSection onBook={handleBook} />
      <MapSection />
      <ContactSection onContact={handleContact} />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
