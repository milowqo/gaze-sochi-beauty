import { Button } from "@/components/ui/button";
import heroMaster from "@/assets/hero-master.jpg";
import process1 from "@/assets/process-1.jpg";
import browsDetail from "@/assets/brows-detail.jpg";
import interior from "@/assets/interior.jpg";
import training from "@/assets/training.jpg";
import masterFull from "@/assets/master-full.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { Send, Instagram } from "lucide-react";

const Index = () => {
  const handleBooking = () => {
    window.open("https://t.me/gazebrows", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-0">
        {/* LEFT COLUMN - BRAND */}
        <div className="px-8 md:px-16 py-12 md:py-16 space-y-16">
          {/* Header */}
          <header className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">GAZE</h1>
              <p className="text-muted-foreground text-sm">Брови</p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Сочи</p>
          </header>

          {/* Hero Section */}
          <section className="space-y-8">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={heroMaster}
                alt="Мария Гусейнова - мастер бровист"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              <img
                src={process1}
                alt="Процесс окрашивания"
                className="w-full aspect-square object-cover"
              />
              <img
                src={browsDetail}
                alt="Детали бровей"
                className="w-full aspect-square object-cover"
              />
              <img
                src={interior}
                alt="Интерьер салона"
                className="w-full aspect-square object-cover"
              />
            </div>

            <p className="text-center text-muted-foreground text-sm leading-relaxed px-4">
              Про трепетный подход к каждому гостю и ученику
            </p>
          </section>

          {/* CTA Button */}
          <Button
            onClick={handleBooking}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base tracking-widest"
          >
            ЗАПИСАТЬСЯ
          </Button>

          {/* Training Section */}
          <section className="space-y-6">
            <div className="border border-border p-4 inline-block">
              <h2 className="text-xl tracking-wider">ОБУЧЕНИЕ</h2>
            </div>

            <p className="text-3xl md:text-4xl italic" style={{ fontFamily: "'Alex Brush', cursive" }}>
              Для меня броу — искусство.
            </p>

            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={training}
                alt="Обучение бровистов"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Quote */}
          <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
            Мне тяжело воспринимать свою деятельность за работу. Я невыносимо люблю то, что делаю.
          </blockquote>
        </div>

        {/* RIGHT COLUMN - SERVICES */}
        <div className="px-8 md:px-16 py-12 md:py-16 space-y-16 bg-muted/30">
          {/* Services Header */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "'Alex Brush', cursive" }}>
              УСЛУГИ
            </h2>
            <p className="text-xs text-muted-foreground tracking-wider">price list</p>
          </div>

          {/* Price List */}
          <div className="space-y-1 border-t border-b border-border py-8">
            <div className="flex justify-between py-4 border-b border-border">
              <div>
                <span className="text-xs text-muted-foreground mr-2">(01)</span>
                <span className="text-sm">Коррекция бровей</span>
                <p className="text-xs text-muted-foreground ml-8 mt-1">(без окрашивания)</p>
              </div>
              <span className="font-medium">1200₽</span>
            </div>

            <div className="flex justify-between py-4 border-b border-border">
              <div>
                <span className="text-xs text-muted-foreground mr-2">(02)</span>
                <span className="text-sm">Архитектура бровей</span>
                <p className="text-xs text-muted-foreground ml-8 mt-1">
                  (коррекция + окрашивание)
                </p>
              </div>
              <span className="font-medium">1500₽</span>
            </div>

            <div className="flex justify-between py-4 border-b border-border">
              <div>
                <span className="text-xs text-muted-foreground mr-2">(03)</span>
                <span className="text-sm">Осветление бровей*</span>
                <p className="text-xs text-muted-foreground ml-8 mt-1">
                  (коррекция + тонирование)
                </p>
              </div>
              <span className="font-medium">1500₽</span>
            </div>

            <div className="flex justify-between py-4 border-b border-border">
              <div>
                <span className="text-xs text-muted-foreground mr-2">(04)</span>
                <span className="text-sm">Комплекс</span>
                <p className="text-xs text-muted-foreground ml-8 mt-1">
                  (брови + окрашивание ресниц)
                </p>
              </div>
              <span className="font-medium">1700₽</span>
            </div>

            <div className="flex justify-between py-4">
              <div>
                <span className="text-xs text-muted-foreground mr-2">(05)</span>
                <span className="text-sm">Комплекс</span>
                <p className="text-xs text-muted-foreground ml-8 mt-1">(брови + дневной макияж)</p>
              </div>
              <span className="font-medium">2500₽</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">*при необходимости предварительного осветления</p>

          {/* CTA Button */}
          <Button
            onClick={handleBooking}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base tracking-widest"
          >
            ЗАПИСАТЬСЯ
          </Button>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={gallery1}
              alt="Результат работы"
              className="w-full aspect-square object-cover col-span-1"
            />
            <img
              src={gallery2}
              alt="Инструменты мастера"
              className="w-full aspect-square object-cover col-span-1"
            />
            <img
              src={gallery3}
              alt="Работа с клиентом"
              className="w-full aspect-square object-cover col-span-1"
            />
            <img
              src={gallery4}
              alt="Брови крупным планом"
              className="w-full aspect-[2/1] object-cover col-span-2"
            />
            <img
              src={gallery5}
              alt="Рабочее место"
              className="w-full aspect-square object-cover col-span-1"
            />
            <img
              src={gallery6}
              alt="Портрет клиента"
              className="w-full aspect-square object-cover col-span-1"
            />
          </div>

          {/* Contacts */}
          <section className="space-y-6">
            <h2 className="text-4xl" style={{ fontFamily: "'Alex Brush', cursive" }}>
              КОНТАКТЫ
            </h2>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 py-6 border-foreground"
                onClick={() => window.open("https://t.me/gazebrows", "_blank")}
              >
                <Send className="w-4 h-4" />
                Telegram
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-3 py-6 border-foreground"
                onClick={() => window.open("https://instagram.com/gaze.brows", "_blank")}
              >
                <Instagram className="w-4 h-4" />
                Instagram *
              </Button>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden mt-8">
              <img
                src={masterFull}
                alt="Мария Гусейнова"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              *Meta — признана экстремистской организацией в России
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">@sereda__yana</p>
      </footer>
    </div>
  );
};

export default Index;
