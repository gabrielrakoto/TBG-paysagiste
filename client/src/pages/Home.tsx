import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Leaf, Waves, Shovel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

import image1 from "@assets/b9e4cdc69_481462575_3899378960275555_154621930400892747_n_1772166840090.jpg";
import image2 from "@assets/404c501e4_473551526_3862657073947744_3116717267078103199_n_1772166840090.jpg";
import image3 from "@assets/32d1c0c61_474792806_3870058806540904_6220378788283094045_n_1772166840091.jpg";
import image4 from "@assets/d1ad557b5_123366883_2747233618823434_1717557200794668059_n_1772166840091.jpg";
import image5 from "@assets/3d9efb3d1_119784194_2706942506185879_5663350872197088632_n_1772166840092.jpg";

const HERO_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" ref={emblaRef}>
          <div className="flex h-full w-full">
            {HERO_IMAGES.map((img, idx) => (
              <div key={idx} className="relative flex-[0_0_100%] h-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img 
                  src={img} 
                  alt={`Aménagement paysager ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container relative z-20 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <AnimatedSection>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-white text-sm font-medium mb-6 tracking-wider uppercase">
              Créateurs d'Espaces
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white max-w-4xl text-balance leading-tight mb-6">
              Nous aménageons l'extérieur de vos maisons et les rendons plus belles.
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl text-balance mb-10">
              Spécialistes en aménagement paysager, embellissement de piscines et création d'espaces extérieurs de rêve dans la région de Québec.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6} className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white border-0">
              <Link href="/contact">Obtenir un devis gratuit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/10 text-white border-white/30 hover:bg-white hover:text-foreground backdrop-blur-sm">
              <Link href="/realisations">Découvrir nos réalisations</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro / Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                {/* landscape gardener working */}
                <img 
                  src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=1000" 
                  alt="Notre équipe au travail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  L'Art de Vivre à l'Extérieur
                </h2>
                <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Avec plus de 10 ans d'expérience, ÉdenPaysage conçoit et réalise des aménagements sur mesure qui respectent la nature et subliment votre propriété.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <ul className="space-y-4">
                  {[
                    "Équipe de professionnels qualifiés",
                    "Matériaux durables et de haute qualité",
                    "Respect des délais et du budget",
                    "Garantie de satisfaction sur tous nos travaux"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <Button asChild variant="link" className="text-primary p-0 h-auto font-bold text-base hover:no-underline group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Contactez notre équipe
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container px-4 md:px-6 mx-auto">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Notre Expertise à Votre Service
            </h2>
            <p className="text-muted-foreground text-lg">
              De la conception à la réalisation, nous vous accompagnons dans toutes les étapes de votre projet d'aménagement extérieur.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aménagement Paysager",
                desc: "Conception complète de vos espaces extérieurs, alliant esthétisme et fonctionnalité.",
                icon: Leaf,
              },
              {
                title: "Embellissement de Piscines",
                desc: "Création d'un écrin naturel et sécuritaire autour de votre espace baignade.",
                icon: Waves,
              },
              {
                title: "Terrassement",
                desc: "Préparation des sols, nivellement et création de murs de soutènement.",
                icon: Shovel,
              }
            ].map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                  <Link href="/services" className="text-primary font-medium flex items-center gap-2 mt-auto group/link">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/services">Voir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
