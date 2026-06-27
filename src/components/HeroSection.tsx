import heroNew from "@/assets/hero-new.jpg";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBook: (placement: string) => void;
  onScrollTo: (id: string) => void;
}

export function HeroSection({ onBook, onScrollTo }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroNew}
          alt="GAZE Brow Studio"
          className="w-full h-full object-cover object-[65%_20%] sm:object-[60%_25%] md:object-[center_30%]"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 text-center animate-on-scroll">
        <div className="space-y-6 sm:space-y-8 backdrop-blur-sm bg-black/10 py-8 sm:py-12 px-4 sm:px-8 rounded-3xl">
          <div className="space-y-2 sm:space-y-4">
            <p className="text-xs sm:text-sm tracking-widest uppercase text-hero-text drop-shadow-lg">
              BROW STUDIO
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-hero-text drop-shadow-2xl">
              GAZE
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto text-hero-text drop-shadow-lg">
            Брови, которые говорят за себя.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center items-center">
            <a
              href="https://dikidi.net/#widget=198091"
              onClick={() => onBook("hero")}
              className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 bg-button-book hover:bg-button-book-hover text-nude-dark px-6 sm:px-8 py-3 sm:py-4 tracking-wider hover:scale-110 hover:shadow-2xl pulse-glow"
            >
              ЗАПИСАТЬСЯ
            </a>

            <Button
              onClick={() => { onBook("hero"); onScrollTo("services"); }}
              size="lg"
              className="bg-cappuccino hover:bg-cappuccino/80 text-hero-text border-2 border-cappuccino rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm tracking-wider transition-all duration-500 hover:scale-110 hover:shadow-2xl font-semibold"
            >
              УСЛУГИ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
