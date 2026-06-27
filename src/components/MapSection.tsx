import { MapPin, Phone, Clock } from "lucide-react";

export function MapSection() {
  return (
    <section id="location" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">ЛОКАЦИЯ</h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">как нас найти</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 animate-on-scroll scroll-animate-delay-1">
          {/* Info cards */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-muted-foreground text-sm">
                  ТЦ Сочи-Магнолия
                  <br />
                  Курортный проспект, 50, 3 этаж
                  <br />
                  Сочи, Краснодарский край
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Часы работы</h3>
                <p className="text-muted-foreground text-sm">
                  Ежедневно: 10:00 – 21:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card">
              <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Телефон</h3>
                <a href="tel:+79113802700" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +7 (911) 380-27-00
                </a>
              </div>
            </div>
          </div>

          {/* Yandex Map */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg min-h-[300px] md:min-h-[400px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A50e4d9708dae209174167be5302514b0f73acf50e1826566c001b194fc46455f&amp;source=constructor"
              width="100%"
              height="100%"
              style={{ minHeight: "400px" }}
              title="GAZE студия бровей на карте Сочи"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
