import { Button } from "@/components/ui/button";
import heroMaster from "@/assets/hero-master.jpg";
import { Send, MessageCircle, HandHeart, MapPin, Sparkles, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { BookingDialog } from "@/components/BookingDialog";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBooking = () => {
    setBookingOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (element.classList.contains("animate-on-scroll")) {
            element.classList.add("scroll-animate");
          }
          if (element.classList.contains("animate-on-scroll-left")) {
            element.classList.add("scroll-animate-left");
          }
          if (element.classList.contains("animate-on-scroll-right")) {
            element.classList.add("scroll-animate-right");
          }
          if (element.classList.contains("animate-on-scroll-scale")) {
            element.classList.add("scroll-animate-scale");
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 transition-all duration-300">
        <nav className="container mx-auto px-4 sm:px-8 py-4">
          <div className="text-xs tracking-widest text-muted-foreground">BROW STUDIO</div>
        </nav>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroMaster}
            alt="GAZE Brow Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 text-center text-white animate-on-scroll">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <p className="text-xs sm:text-sm tracking-widest uppercase opacity-90">
                BROW STUDIO
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold">
                GAZE
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
              Брови, которые говорят за себя.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center">
              <Button
                onClick={handleBooking}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 sm:px-12 py-5 sm:py-6 text-sm sm:text-base tracking-wider transition-all duration-300 hover:scale-105 pulse-glow"
              >
                ЗАПИСАТЬСЯ
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-white/90 hover:bg-white text-foreground border-2 border-white rounded-full px-8 sm:px-12 py-5 sm:py-6 text-sm sm:text-base tracking-wider transition-all duration-300 hover:scale-105"
              >
                УСЛУГИ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-card">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 animate-on-scroll scroll-animate-delay-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Долгая носка</h3>
              <p className="text-muted-foreground leading-relaxed">
                Равномерный цвет и четкая форма до 4х недель.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 animate-on-scroll scroll-animate-delay-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <HandHeart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Сервис и качество</h3>
              <p className="text-muted-foreground leading-relaxed">
                Чай, конфетки, расслабляющая музыка на фоне и качественно
                предоставленные услуги.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 animate-on-scroll scroll-animate-delay-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 md:col-span-1">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Удобное расположение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Студия находится в центре города, рядом парковка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">УСЛУГИ</h2>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              price list
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-1 animate-on-scroll scroll-animate-delay-1">
            {/* Service Items */}
            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(01)</span>
                  <span className="text-base sm:text-lg">Коррекция бровей <span className="text-xs sm:text-sm text-muted-foreground">(без окрашивания)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1200₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(02)</span>
                  <span className="text-base sm:text-lg">Архитектура бровей <span className="text-xs sm:text-sm text-muted-foreground">(коррекция + окрашивание)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1500₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(03)</span>
                  <span className="text-base sm:text-lg">Осветление бровей* <span className="text-xs sm:text-sm text-muted-foreground">(коррекция + тонирование)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1500₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(04)</span>
                  <span className="text-base sm:text-lg">Комплекс <span className="text-xs sm:text-sm text-muted-foreground">(брови + окрашивание ресниц)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">1700₽</span>
            </div>

            <div className="flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xs text-muted-foreground">(05)</span>
                  <span className="text-base sm:text-lg">Комплекс <span className="text-xs sm:text-sm text-muted-foreground">(брови + дневной макияж)</span></span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">2500₽</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-8">
            *при необходимости предварительного осветления
          </p>

          <div className="flex justify-center mt-8 sm:mt-12 animate-on-scroll scroll-animate-delay-2">
            <Button
              onClick={handleBooking}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 sm:px-16 py-5 sm:py-6 text-sm sm:text-base tracking-wider transition-all duration-300 hover:scale-105 pulse-glow w-full sm:w-auto"
            >
              ЗАПИСАТЬСЯ
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">КОНТАКТЫ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-on-scroll scroll-animate-delay-1">
            <Button
              variant="outline"
              size="lg"
              className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://t.me/gazebrows", "_blank")}
            >
              <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              Telegram
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("https://wa.me/", "_blank")
              }
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              WhatsApp
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1"
              onClick={() =>
                window.open("https://vk.com/", "_blank")
              }
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.11 14.77h-1.38c-.55 0-.72-.44-1.72-1.46-.86-.88-1.25-1-1.47-1-.3 0-.39.09-.39.51v1.34c0 .36-.11.58-1.07.58-1.58 0-3.33-.95-4.56-2.73-1.85-2.61-2.35-4.58-2.35-4.99 0-.22.09-.43.51-.43h1.38c.38 0 .52.17.67.58.76 2.2 2.04 4.13 2.56 4.13.2 0 .29-.09.29-.59v-2.3c-.07-.96-.56-1.04-.56-1.38 0-.17.14-.34.37-.34h2.16c.32 0 .44.17.44.54v3.09c0 .32.14.44.23.44.2 0 .37-.12.74-.49 1.14-1.28 1.95-3.26 1.95-3.26.11-.22.28-.43.7-.43h1.38c.46 0 .56.24.46.58-.17.82-1.75 3.5-1.75 3.5-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.14.44-.08.67-.52.67z"/>
              </svg>
              VK
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 text-center border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-6 sm:mb-8 animate-on-scroll">
            <p className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-2">GAZE</p>
            <p className="text-xs tracking-widest text-muted-foreground">
              BROW STUDIO
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © BROW STUDIO GAZE {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Floating Help Button */}
      <button
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-terracotta text-background flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 pulse-glow z-40"
        onClick={handleBooking}
        aria-label="Помощь"
      >
        <HelpCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
