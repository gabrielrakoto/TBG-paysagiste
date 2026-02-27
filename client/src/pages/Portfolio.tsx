import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const PORTFOLIO_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&q=80&w=800", /* modern patio */
    title: "Terrasse Moderne",
    category: "Paysagement"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800", /* luxury pool */
    title: "Oasis Aquatique",
    category: "Piscines"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", /* beautiful garden path */
    title: "Sentier Fleuri",
    category: "Jardins"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1584483756834-31518175d7c8?auto=format&fit=crop&q=80&w=800", /* stone wall landscaping */
    title: "Muret de Soutènement",
    category: "Terrassement"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800", /* outdoor living room */
    title: "Espace de Vie Extérieur",
    category: "Paysagement"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1595152865913-c91cb10f0896?auto=format&fit=crop&q=80&w=800", /* garden with flowers */
    title: "Aménagement Floral",
    category: "Jardins"
  },
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
