import { Button } from "@/components/ui/button";
import heroMaster from "@/assets/hero-master.jpg";
import { Send, Instagram, HandHeart, MapPin, Sparkles, HelpCircle } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  const handleBooking = () => {
    window.open("https://t.me/gazebrows", "_blank");
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
        <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-xs tracking-widest text-muted-foreground">BROW STUDIO</div>
          <div className="flex gap-8 text-sm">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-primary transition-colors"
            >
              Идеальная форма
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-primary transition-colors"
            >
              Плавный изгиб
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-primary transition-colors"
            >
              Правильный цвет
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8 animate-on-scroll-left">
              <div className="space-y-2">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  BROW STUDIO
                </p>
                <h1 className="text-7xl md:text-8xl font-serif font-bold text-primary">
                  GAZE
                </h1>
              </div>

              <p className="text-xl text-muted-foreground font-light">
                Брови, которые говорят за себя.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  onClick={handleBooking}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-base tracking-wider transition-all duration-300 hover:scale-105 pulse-glow"
                >
                  ЗАПИСАТЬСЯ
                </Button>
                <Button
                  onClick={() => scrollToSection("services")}
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary-foreground/30 hover:bg-secondary text-secondary-foreground rounded-full px-12 py-6 text-base tracking-wider transition-all duration-300 hover:scale-105"
                >
                  УСЛУГИ
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image with Decorative Element */}
            <div className="relative animate-on-scroll-scale">
              <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-primary opacity-20 blur-3xl"></div>
              <div className="relative">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/80 flex items-center justify-center text-background text-8xl font-bold tracking-tighter overflow-hidden">
                  <span className="opacity-30">BROW</span>
                </div>
                <img
                  src={heroMaster}
                  alt="GAZE Brow Studio"
                  className="relative z-10 w-full aspect-square object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-8 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-3xl p-8 space-y-6 animate-on-scroll scroll-animate-delay-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Долгая носка</h3>
              <p className="text-muted-foreground leading-relaxed">
                Равномерный цвет и четкая форма до 4х недель.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-3xl p-8 space-y-6 animate-on-scroll scroll-animate-delay-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
            <div className="bg-background rounded-3xl p-8 space-y-6 animate-on-scroll scroll-animate-delay-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
      <section id="services" className="py-32 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-6xl font-serif font-bold mb-4">УСЛУГИ</h2>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">
              price list
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-1 animate-on-scroll scroll-animate-delay-1">
            {/* Service Items */}
            <div className="flex justify-between items-start py-6 border-b border-border hover:bg-card transition-all duration-300 px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-muted-foreground">(01)</span>
                  <span className="text-lg">Коррекция бровей</span>
                </div>
                <p className="text-sm text-muted-foreground ml-8 mt-1">
                  (без окрашивания)
                </p>
              </div>
              <span className="font-semibold text-lg">1200₽</span>
            </div>

            <div className="flex justify-between items-start py-6 border-b border-border hover:bg-card transition-all duration-300 px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-muted-foreground">(02)</span>
                  <span className="text-lg">Архитектура бровей</span>
                </div>
                <p className="text-sm text-muted-foreground ml-8 mt-1">
                  (коррекция + окрашивание)
                </p>
              </div>
              <span className="font-semibold text-lg">1500₽</span>
            </div>

            <div className="flex justify-between items-start py-6 border-b border-border hover:bg-card transition-all duration-300 px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-muted-foreground">(03)</span>
                  <span className="text-lg">Осветление бровей*</span>
                </div>
                <p className="text-sm text-muted-foreground ml-8 mt-1">
                  (коррекция + тонирование)
                </p>
              </div>
              <span className="font-semibold text-lg">1500₽</span>
            </div>

            <div className="flex justify-between items-start py-6 border-b border-border hover:bg-card transition-all duration-300 px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-muted-foreground">(04)</span>
                  <span className="text-lg">Комплекс</span>
                </div>
                <p className="text-sm text-muted-foreground ml-8 mt-1">
                  (брови + окрашивание ресниц)
                </p>
              </div>
              <span className="font-semibold text-lg">1700₽</span>
            </div>

            <div className="flex justify-between items-start py-6 border-b border-border hover:bg-card transition-all duration-300 px-4 rounded-lg">
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-muted-foreground">(05)</span>
                  <span className="text-lg">Комплекс</span>
                </div>
                <p className="text-sm text-muted-foreground ml-8 mt-1">
                  (брови + дневной макияж)
                </p>
              </div>
              <span className="font-semibold text-lg">2500₽</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-8">
            *при необходимости предварительного осветления
          </p>

          <div className="flex justify-center mt-12 animate-on-scroll scroll-animate-delay-2">
            <Button
              onClick={handleBooking}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-16 py-6 text-base tracking-wider transition-all duration-300 hover:scale-105 pulse-glow"
            >
              ЗАПИСАТЬСЯ
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-6xl font-serif font-bold">КОНТАКТЫ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-on-scroll scroll-animate-delay-1">
            <Button
              variant="outline"
              size="lg"
              className="justify-start gap-4 py-8 text-lg border-2 rounded-2xl hover:bg-background hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://t.me/gazebrows", "_blank")}
            >
              <Send className="w-6 h-6" />
              Telegram
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="justify-start gap-4 py-8 text-lg border-2 rounded-2xl hover:bg-background hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("https://instagram.com/gaze.brows", "_blank")
              }
            >
              <Instagram className="w-6 h-6" />
              Instagram *
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center animate-on-scroll scroll-animate-delay-2">
            *Meta — признана экстремистской организацией в России
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border bg-background">
        <div className="container mx-auto px-8">
          <div className="mb-8 animate-on-scroll">
            <p className="text-4xl font-serif font-bold text-primary mb-2">GAZE</p>
            <p className="text-xs tracking-widest text-muted-foreground">
              BROW STUDIO
            </p>
          </div>
          <p className="text-xs text-muted-foreground">@sereda__yana</p>
          <p className="text-xs text-muted-foreground mt-2">
            © BROW STUDIO GAZE {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Floating Help Button */}
      <button
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-terracotta text-background flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 pulse-glow z-40"
        onClick={handleBooking}
        aria-label="Помощь"
      >
        <HelpCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Index;
