const SERVICES = [
  { num: "01", label: "Коррекция бровей", note: "без окрашивания", price: "1000₽" },
  { num: "02", label: "Коррекция + Окрашивание", note: "краска / хна", price: "1800₽" },
  { num: "03", label: "Коррекция + Окрашивание + Ламинирование", note: "", price: "2300₽" },
  { num: "04", label: "Коррекция + Ламинирование", note: "", price: "1800₽" },
  { num: "05", label: "Коррекция + Осветление", note: "небольшое прореживание входит в стоимость", price: "1800₽" },
  { num: "06", label: "Окрашивание бровей", note: "краска / хна", price: "1000₽" },
  { num: "07", label: "Ламинирование бровей", note: "уход входит в стоимость", price: "1000₽" },
  { num: "08", label: "Осветление бровей", note: "уход входит в стоимость", price: "1000₽" },
  { num: "09", label: "Депиляция зон на лице", note: "", price: "от 100₽" },
] as const;

interface ServicesSectionProps {
  onBook: (placement: string) => void;
}

export function ServicesSection({ onBook }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">УСЛУГИ</h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">Прайс-лист — услуги brow-студии в центре Сочи</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-1 animate-on-scroll scroll-animate-delay-1">
          {SERVICES.map((svc) => (
            <div
              key={svc.num}
              className={`flex justify-between items-center gap-2 py-4 sm:py-6 border-b border-border hover:bg-card transition-all duration-300 px-3 sm:px-4 rounded-lg`}
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                  <span className="text-xs text-muted-foreground">({svc.num})</span>
                  <span className="text-base sm:text-lg">
                    {svc.label}
                    {svc.note && <span className="text-xs sm:text-sm text-muted-foreground ml-1">({svc.note})</span>}
                  </span>
                </div>
              </div>
              <span className="font-semibold text-base sm:text-lg whitespace-nowrap">{svc.price}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-12 animate-on-scroll scroll-animate-delay-2">
          <a
            href="https://dikidi.net/#widget=198091"
            onClick={() => onBook("services")}
            className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 text-primary-foreground px-12 sm:px-16 py-5 sm:py-6 tracking-wider hover:scale-105 pulse-glow w-full sm:w-auto"
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
      </div>
    </section>
  );
}
