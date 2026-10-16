import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Rail } from "@/components/Rail";

import image1 from "@assets/b9e4cdc69_481462575_3899378960275555_154621930400892747_n_1772166840090.jpg";
import image2 from "@assets/404c501e4_473551526_3862657073947744_3116717267078103199_n_1772166840090.jpg";
import image3 from "@assets/32d1c0c61_474792806_3870058806540904_6220378788283094045_n_1772166840091.jpg";
import image4 from "@assets/terrassement-pexels-mographe.jpg";
import image5 from "@assets/3d9efb3d1_119784194_2706942506185879_5663350872197088632_n_1772166840092.jpg";

const PORTFOLIO_IMAGES = [
  { id: 1, url: image1, title: "aménagement paysager", category: "Paysagement" },
  { id: 2, url: image2, title: "espace piscine", category: "Piscines" },
  { id: 3, url: image3, title: "sentier de jardin", category: "Jardins" },
  { id: 4, url: image4, title: "projet de terrassement", category: "Terrassement" },
  { id: 5, url: image5, title: "design extérieur", category: "Paysagement" },
];

// Prestations affichées au survol (reprises de la page Services)
const CATEGORY_TAGS: Record<string, string[]> = {
  Paysagement: ["Plans 3D sur mesure", "Plantation d'arbres et arbustes", "Éclairage paysager"],
  Piscines: ["Contours en pavé uni", "Clôtures esthétiques", "Végétation adaptée"],
  Jardins: ["Plates-bandes fleuries", "Rocailles", "Entretien saisonnier"],
  Terrassement: ["Nivellement de terrain", "Murs de soutènement", "Drainage"],
};

const FILTERS = ["Tous", ...Object.keys(CATEGORY_TAGS)];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<typeof PORTFOLIO_IMAGES[0] | null>(null);
  const [filter, setFilter] = useState("Tous");
  const items = filter === "Tous" ? PORTFOLIO_IMAGES : PORTFOLIO_IMAGES.filter((img) => img.category === filter);

  return (
    <div className="bg-white pt-20 text-ink">
      <section className="relative min-h-screen pb-24 md:pb-32">
        <Rail variant="light" />
        <div className="relative z-20 px-6 md:px-[30px] lg:pr-[var(--rail-w)]">
          <AnimatedSection>
            <h1 className="pt-16 md:pt-28 font-display font-light text-6xl md:text-8xl lg:text-[88px] leading-[0.95] tracking-[-0.02em]">
              nos réalisations
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-7 text-ink/70">
              Laissez-vous inspirer par nos projets récents. Chaque aménagement est unique et reflète la personnalité
              de nos clients tout en s'harmonisant avec la nature.
            </p>
          </AnimatedSection>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-ink/15 pb-4 text-sm">
            <span className="text-ink/50">Filtrer par service</span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`transition-opacity ${
                  filter === f ? "underline underline-offset-8 opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:pr-[3vw]">
            {items.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="group relative block aspect-[3/4] overflow-hidden text-left text-white"
                aria-label={`Agrandir : ${img.title}`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/40 transition-colors duration-500 group-hover:bg-black/30" />
                <h3 className="absolute left-6 right-6 top-6 font-display font-normal text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em]">
                  {img.title}
                </h3>
                <ul className="absolute bottom-6 left-6 space-y-1 text-sm opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {CATEGORY_TAGS[img.category].map((tag) => (
                    <li key={tag} className="border-b border-white/40 pb-1">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="absolute bottom-6 right-6 flex items-center gap-3">
                  <span className="h-9 w-px bg-white" />
                  <ArrowRight className="h-6 w-6 stroke-[1.25] transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agrandissement */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl overflow-hidden rounded-none border-none bg-ink p-0 text-white [&>button]:text-white">
          <VisuallyHidden.Root>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
          </VisuallyHidden.Root>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="h-auto max-h-[85vh] w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-display text-lg text-white/70">{selectedImage.category}</p>
                <h3 className="font-display text-3xl md:text-4xl font-normal tracking-[-0.02em]">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
