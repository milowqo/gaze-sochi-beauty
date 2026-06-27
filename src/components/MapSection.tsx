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
          <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg" style={{ height: "400px" }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.728946%2C43.577578&z=17&l=map&pt=39.728946%2C43.577578%2Cpm2rdm"
              width="100%"
              height="100%"
              title="GAZE студия бровей на карте Сочи"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="md:col-span-5 flex justify-center mt-6">
            <a
              href="https://yandex.ru/maps/org/geyz/102215447311/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Открыть карточку GAZE в Яндекс.Картах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
