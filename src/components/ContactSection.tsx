import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  onContact: (channel: string) => void;
}

export function ContactSection({ onContact }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">КОНТАКТЫ</h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">свяжитесь с нами</p>
        </div>

        {/* Info row */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8 animate-on-scroll scroll-animate-delay-1">
          <div className="text-center p-6 rounded-2xl bg-background">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-2">Адрес</p>
            <p className="text-lg font-medium">ТЦ Сочи-Магнолия, Курортный проспект, 50</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-background">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-2">Часы работы</p>
            <p className="text-lg font-medium">Ежедневно 10:00 – 21:00</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-on-scroll scroll-animate-delay-2">
          <Button
            variant="outline"
            size="lg"
            className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-110 transition-all duration-500 hover:shadow-xl"
            onClick={() => {
              onContact("telegram");
              window.open("https://t.me/milowqo", "_blank", "noopener,noreferrer");
            }}
            aria-label="Telegram"
          >
            <Send className="w-5 h-5 sm:w-6 sm:h-6" />
            Telegram
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-110 transition-all duration-500 hover:shadow-xl"
            onClick={() => {
              onContact("whatsapp");
              window.open("https://wa.me/79113802700", "_blank", "noopener,noreferrer");
            }}
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            WhatsApp
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="justify-center gap-3 sm:gap-4 py-6 sm:py-8 text-base sm:text-lg border-2 rounded-2xl hover:bg-background hover:scale-110 transition-all duration-500 hover:shadow-xl sm:col-span-2 lg:col-span-1"
            onClick={() => {
              onContact("vk");
              window.open("https://vk.com/mari.guseinova", "_blank", "noopener,noreferrer");
            }}
            aria-label="VK"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.11 14.77h-1.38c-.55 0-.72-.44-1.72-1.46-.86-.88-1.25-1-1.47-1-.3 0-.39.09-.39.51v1.34c0 .36-.11.58-1.07.58-1.58 0-3.33-.95-4.56-2.73-1.85-2.61-2.35-4.58-2.35-4.99 0-.22.09-.43.51-.43h1.38c.38 0 .52.17.67.58.76 2.2 2.04 4.13 2.56 4.13.2 0 .29-.09.29-.59v-2.3c-.07-.96-.56-1.04-.56-1.38 0-.17.14-.34.37-.34h2.16c.32 0 .44.17.44.54v3.09c0 .32.14.44.23.44.2 0 .37-.12.74-.49 1.14-1.28 1.95-3.26 1.95-3.26.11-.22.28-.43.7-.43h1.38c.46 0 .56.24.46.58-.17.82-1.75 3.5-1.75 3.5-.17.27-.23.39 0 .7.17.23.72.71 1.09 1.14.67.77 1.18 1.41 1.32 1.86.14.44-.08.67-.52.67z" />
            </svg>
            VK
          </Button>
        </div>
      </div>
    </section>
  );
}
