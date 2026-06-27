import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const galleryImages = [{
  id: 1,
  src: work1,
  alt: "Коррекция бровей в Сочи — архитектура и форма от GAZE"
}, {
  id: 2,
  src: work2,
  alt: "Результат коррекции бровей до и после — студия GAZE Сочи"
}, {
  id: 3,
  src: work3,
  alt: "Окрашивание бровей краской в студии GAZE Сочи"
}, {
  id: 4,
  src: work4,
  alt: "Комплекс услуг: коррекция и ламинирование бровей GAZE"
}, {
  id: 5,
  src: work5,
  alt: "Оформление бровей — работа мастера GAZE в Сочи"
}, {
  id: 6,
  src: work6,
  alt: "Ламинирование бровей с уходом — результат GAZE Сочи"
}];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());

  const handleLoad = (id: number) => setLoaded((prev) => new Set(prev).add(id));

  return <section id="gallery" className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">РАБОТЫ</h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">ПРИМЕРЫ РАБОТ</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 animate-on-scroll scroll-animate-delay-1">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group animate-on-scroll-scale" style={{
              animationDelay: `${index * 100}ms`
            }} onClick={() => setSelectedImage(index)}>
              {/* Skeleton placeholder */}
              {!loaded.has(image.id) && (
                <div className="absolute inset-0 bg-muted animate-pulse rounded-2xl sm:rounded-3xl" />
              )}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${loaded.has(image.id) ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                decoding="async"
                onLoad={() => handleLoad(image.id)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage !== null && <img src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} className="w-full h-auto rounded-2xl" decoding="async" />}
        </DialogContent>
      </Dialog>
    </section>;
};
