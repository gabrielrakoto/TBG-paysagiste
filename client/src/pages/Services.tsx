import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Rail } from "@/components/Rail";

import image1 from "@assets/b9e4cdc69_481462575_3899378960275555_154621930400892747_n_1772166840090.jpg";
import image2 from "@assets/404c501e4_473551526_3862657073947744_3116717267078103199_n_1772166840090.jpg";
import image3 from "@assets/32d1c0c61_474792806_3870058806540904_6220378788283094045_n_1772166840091.jpg";
import image5 from "@assets/3d9efb3d1_119784194_2706942506185879_5663350872197088632_n_1772166840092.jpg";

const services = [
  {
    id: "paysagement",
    category: "Paysagement",
    title: "paysagement extérieur",
    description:
      "Nous concevons des plans d'aménagement sur mesure qui transforment votre cour en un espace de vie exceptionnel. De la plantation stratégique à la pose de gazon, notre expertise garantit un résultat durable et esthétique.",
    image: image1,
    features: ["Plans 3D sur mesure", "Plantation d'arbres et arbustes", "Pose de tourbe", "Éclairage paysager"],
  },
  {
    id: "piscines",
    category: "Piscines",
    title: "embellissement de piscines",
    description:
      "Votre piscine mérite un écrin à sa hauteur. Nous créons des contours de piscine élégants, sécuritaires et faciles d'entretien en utilisant des matériaux de première qualité comme la pierre naturelle ou le pavé uni.",
    image: image2,
    features: ["Contours en pavé uni", "Chutes d'eau intégrées", "Clôtures esthétiques", "Végétation adaptée"],
  },
  {
    id: "jardins",
    category: "Jardins",
    title: "jardins décoratifs",
    description:
      "Apportez couleur et vie à votre propriété avec nos jardins décoratifs. Nous sélectionnons des plantes adaptées à notre climat québécois pour garantir une floraison magnifique du printemps à l'automne.",
    image: image3,
    features: ["Plates-bandes fleuries", "Jardins d'eau", "Rocailles", "Entretien saisonnier"],
  },
  {
    id: "terrassement",
    category: "Terrassement",
    title: "terrassement",
    description:
      "La base de tout bon aménagement réside dans un terrassement professionnel. Nous modifions le relief de votre terrain pour en optimiser l'usage, prévenir les problèmes de drainage et créer des espaces plans.",
    image: image5,
    features: ["Nivellement de terrain", "Murs de soutènement", "Drainage", "Excavation"],
  },
];

export default function Services() {
  return (
    <div className="bg-white pt-20 text-ink">
      {/* Services vedettes */}
      <section className="relative pb-24 md:pb-32">
        <Rail variant="light" />
        <div className="relative z-20 px-6 md:px-[30px] lg:pr-[var(--rail-w)]">
          <AnimatedSection>
            <h1 className="pt-16 pb-12 md:pt-28 md:pb-20 font-display font-light text-6xl md:text-8xl lg:text-[88px] leading-[0.95] tracking-[-0.02em]">
              nos services
            </h1>
          </AnimatedSection>

          <div className="space-y-12 md:space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.id}>
                <article
                  id={service.id}
                  className={`flex scroll-mt-28 flex-col gap-8 border border-ink/15 p-4 md:p-6 lg:gap-0 ${
                    index % 2 === 1 ? "lg:flex-row-reverse lg:ml-[8%]" : "lg:flex-row lg:mr-[8%]"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden lg:w-[58%]">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-12">
                      <p className="truncate text-sm text-white">{service.features.join(" | ")}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex min-w-0 flex-col justify-center pb-2 lg:w-[42%] lg:px-8 lg:pb-0">
                    <p className="font-display text-xl md:text-2xl text-ink/60">Service</p>
                    <h2 className="mt-1 font-display font-normal text-4xl md:text-5xl lg:text-[2.8vw] leading-[1.02] tracking-[-0.02em]">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-[15px] leading-7 text-ink/75">{service.description}</p>
                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex items-center gap-4 self-start font-display text-xl md:text-2xl"
                    >
                      Demander une soumission
                      <span className="grid h-9 w-9 place-items-center border border-current transition-colors group-hover:bg-ink group-hover:text-white">
                        <ArrowRight className="h-5 w-5 stroke-[1.25]" />
                      </span>
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
