import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import image1 from "@assets/b9e4cdc69_481462575_3899378960275555_154621930400892747_n_1772166840090.jpg";
import image2 from "@assets/404c501e4_473551526_3862657073947744_3116717267078103199_n_1772166840090.jpg";
import image3 from "@assets/32d1c0c61_474792806_3870058806540904_6220378788283094045_n_1772166840091.jpg";
import image4 from "@assets/d1ad557b5_123366883_2747233618823434_1717557200794668059_n_1772166840091.jpg";
import image5 from "@assets/3d9efb3d1_119784194_2706942506185879_5663350872197088632_n_1772166840092.jpg";

const PORTFOLIO_IMAGES = [
  {
    id: 1,
    url: image1,
    title: "Aménagement Paysager",
    category: "Paysagement"
  },
  {
    id: 2,
    url: image2,
    title: "Espace Piscine",
    category: "Piscines"
  },
  {
    id: 3,
    url: image3,
    title: "Sentier de Jardin",
    category: "Jardins"
  },
  {
    id: 4,
    url: image4,
    title: "Projet de Terrassement",
    category: "Terrassement"
  },
  {
    id: 5,
    url: image5,
    title: "Design Extérieur",
    category: "Paysagement"
  }
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<typeof PORTFOLIO_IMAGES[0] | null>(null);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <section className="container px-4 md:px-6 mx-auto mb-16">
        <AnimatedSection className="text-center max-w-3xl mx-auto pt-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Nos Réalisations</h1>
          <p className="text-lg text-muted-foreground">
            Laissez-vous inspirer par nos projets récents. Chaque aménagement est unique et reflète la personnalité de nos clients tout en s'harmonisant avec la nature.
          </p>
        </AnimatedSection>
      </section>

      <section className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_IMAGES.map((img, idx) => (
            <AnimatedSection key={img.id} delay={idx * 0.1}>
              <div 
                className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-square bg-muted"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <ZoomIn className="h-10 w-10 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100" />
                  <h3 className="text-xl font-serif font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                    {img.title}
                  </h3>
                  <span className="text-sm font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 mt-2">
                    {img.category}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-background/95 border-none p-1 shadow-2xl rounded-2xl overflow-hidden">
          <VisuallyHidden.Root>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
          </VisuallyHidden.Root>
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.url.replace("w=800", "w=1600")} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <h3 className="text-2xl font-serif text-white font-bold">{selectedImage.title}</h3>
                <p className="text-white/80 font-medium">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
