import { Sparkles, HandHeart, MapPin } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Долгая носка",
    desc: "Равномерный цвет и четкая форма до 4х недель.",
  },
  {
    icon: HandHeart,
    title: "Сервис и качество",
    desc: "Чай, конфетки, расслабляющая музыка на фоне и качественно предоставленные услуги.",
  },
  {
    icon: MapPin,
    title: "Удобное расположение",
    desc: "Студия находится в центре города, рядом парковка.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className={`bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 animate-on-scroll scroll-animate-delay-${i + 1} hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${i === 2 ? "sm:col-span-2 md:col-span-1" : ""}`}
            >
              <div className="w-20 h-20 rounded-full bg-button-book flex items-center justify-center transition-all duration-500 hover:scale-110">
                <feat.icon className="w-10 h-10 text-nude-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-nude-dark">{feat.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
