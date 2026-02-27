import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Leaf, Waves, TreePine, Shovel, Check } from "lucide-react";

import image1 from "@assets/b9e4cdc69_481462575_3899378960275555_154621930400892747_n_1772166840090.jpg";
import image2 from "@assets/404c501e4_473551526_3862657073947744_3116717267078103199_n_1772166840090.jpg";
import image3 from "@assets/32d1c0c61_474792806_3870058806540904_6220378788283094045_n_1772166840091.jpg";
import image5 from "@assets/3d9efb3d1_119784194_2706942506185879_5663350872197088632_n_1772166840092.jpg";

const services = [
  {
    id: "paysagement",
    title: "Paysagement Extérieur",
    icon: Leaf,
    description: "Nous concevons des plans d'aménagement sur mesure qui transforment votre cour en un espace de vie exceptionnel. De la plantation stratégique à la pose de gazon, notre expertise garantit un résultat durable et esthétique.",
    image: image1,
    features: ["Plans 3D sur mesure", "Plantation d'arbres et arbustes", "Pose de tourbe", "Éclairage paysager"]
  },
  {
    id: "piscines",
    title: "Embellissement de Piscines",
    icon: Waves,
    description: "Votre piscine mérite un écrin à sa hauteur. Nous créons des contours de piscine élégants, sécuritaires et faciles d'entretien en utilisant des matériaux de première qualité comme la pierre naturelle ou le pavé uni.",
    image: image2,
    features: ["Contours en pavé uni", "Chutes d'eau intégrées", "Clôtures esthétiques", "Végétation adaptée"]
  },
  {
    id: "jardins",
    title: "Jardins Décoratifs",
    icon: TreePine,
    description: "Apportez couleur et vie à votre propriété avec nos jardins décoratifs. Nous sélectionnons des plantes adaptées à notre climat québécois pour garantir une floraison magnifique du printemps à l'automne.",
    image: image3,
    features: ["Plates-bandes fleuries", "Jardins d'eau", "Rocailles", "Entretien saisonnier"]
  },
  {
    id: "terrassement",
    title: "Terrassement",
    icon: Shovel,
    description: "La base de tout bon aménagement réside dans un terrassement professionnel. Nous modifions le relief de votre terrain pour en optimiser l'usage, prévenir les problèmes de drainage et créer des espaces plans.",
    image: image5,
    features: ["Nivellement de terrain", "Murs de soutènement", "Drainage", "Excavation"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Header */}
      <section className="bg-primary/5 py-16 mb-16 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Nos Services</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez notre gamme complète de services d'aménagement paysager. Nous mettons notre passion et notre savoir-faire au service de vos espaces extérieurs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-16 md:gap-24">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={0.1}>
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
                
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary mb-2">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-3 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground font-medium text-sm">
                        <div className="rounded-full bg-primary/20 p-1">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
