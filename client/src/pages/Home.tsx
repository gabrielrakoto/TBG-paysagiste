import { type ReactNode, useCallback, useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowDown, ArrowRight, Facebook, Instagram } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowLink } from "@/components/ArrowLink";

import image1 from "@assets/b9e4cdc69_481462575_3899378960275555_154621930400892747_n_1772166840090.jpg";
import image2 from "@assets/404c501e4_473551526_3862657073947744_3116717267078103199_n_1772166840090.jpg";
import image3 from "@assets/32d1c0c61_474792806_3870058806540904_6220378788283094045_n_1772166840091.jpg";
import image4 from "@assets/d1ad557b5_123366883_2747233618823434_1717557200794668059_n_1772166840091.jpg";
import image5 from "@assets/3d9efb3d1_119784194_2706942506185879_5663350872197088632_n_1772166840092.jpg";

const HERO_IMAGES = [image1, image2, image3, image4, image5];

const PROJECTS = [
  { image: image2, title: "espace piscine" },
  { image: image1, title: "aménagement paysager" },
  { image: image3, title: "sentier de jardin" },
  { image: image4, title: "projet de terrassement" },
  { image: image5, title: "design extérieur" },
];

const STEPS = [
  {
    title: "consultation",
    desc: "Nous visitons votre terrain, écoutons vos idées et évaluons les contraintes du site.",
  },
  {
    title: "conception",
    desc: "Un plan sur mesure, le choix des matériaux et une soumission claire, sans surprise.",
  },
  {
    title: "réalisation",
    desc: "Notre équipe exécute les travaux dans le respect des délais et du budget convenus.",
  },
];

const SERVICES = [
  "aménagement paysager",
  "embellissement de piscines",
  "jardins décoratifs",
  "terrassement",
];

/* Colonne de droite (desktop) : pleine et sombre sur fond blanc, en verre flouté sur les photos */
function Rail({ variant, children }: { variant: "dark" | "glass"; children?: ReactNode }) {
  return (
    <div
      className={`absolute inset-y-0 right-0 z-10 hidden lg:flex w-[var(--rail-w)] flex-col items-center ${
        variant === "dark"
          ? "bg-rail"
          : "bg-white/15 backdrop-blur-xl border-l border-white/25"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [heroRef] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const [projectsRef, projectsApi] = useEmblaCarousel({ loop: true, duration: 35 });
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (!projectsApi) return;
    const onSelect = () => setActiveProject(projectsApi.selectedScrollSnap());
    projectsApi.on("select", onSelect);
    return () => {
      projectsApi.off("select", onSelect);
    };
  }, [projectsApi]);

  const nextProject = useCallback(() => projectsApi?.scrollNext(), [projectsApi]);

  return (
    <div className="flex flex-col bg-white text-ink font-sans">
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0" ref={heroRef}>
          <div className="flex h-full">
            {HERO_IMAGES.map((img, idx) => (
              <div key={idx} className="relative h-full flex-[0_0_100%]">
                <img
                  src={img}
                  alt={`Aménagement paysager ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-[30px] md:pb-24 lg:pr-[var(--rail-w)]">
          <AnimatedSection delay={0.3}>
            <h1 className="font-display font-light text-white text-[52px] sm:text-6xl md:text-8xl lg:text-[96px] leading-[0.95] tracking-[-0.02em]">
              votre cour,
              <br />
              votre refuge
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <p className="mt-6 max-w-md text-base md:text-lg text-white/85">
              Aménagement paysager, piscines et terrassement sur mesure dans la région de Québec.
            </p>
          </AnimatedSection>
        </div>

        <Rail variant="glass">
          <a
            href="#intro"
            className="mt-auto mb-auto flex flex-col items-center gap-6 pt-20 text-white"
            aria-label="Défiler vers le contenu"
          >
            <span className="font-display text-sm tracking-wide [writing-mode:vertical-rl]">défiler</span>
            <ArrowDown className="h-7 w-7 stroke-[1.25]" />
          </a>
          <div className="mb-10 flex gap-4 text-white">
            <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </Rail>
      </section>

      {/* Intro */}
      <section id="intro" className="relative py-24 md:py-40">
        <Rail variant="dark" />
        <div className="relative z-20 grid gap-16 px-6 md:px-[30px] lg:grid-cols-[1fr_1.15fr] lg:gap-[5vw] lg:pr-[6vw] items-center">
          <div>
            <AnimatedSection>
              <h2 className="font-display font-light text-5xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.02em]">
                l'art de vivre
                <br />
                dehors
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h3 className="mt-12 font-display text-2xl md:text-4xl font-normal tracking-[-0.02em]">
                profitez davantage de chez vous
              </h3>
            </AnimatedSection>
            <AnimatedSection delay={0.25} className="mt-8 max-w-md space-y-5 text-[15px] leading-8 text-ink/80">
              <p>
                Paysagementpro conçoit et réalise des aménagements paysagers, des abords de piscines et des
                travaux de terrassement sur mesure dans la région de Québec.
              </p>
              <p>
                Depuis plus de 10 ans, nous créons des espaces extérieurs pensés pour être vécus : recevoir,
                se détendre et partager de bons moments avec ceux qui comptent.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.35} className="mt-14">
              <ArrowLink href="/services">Découvrir nos services</ArrowLink>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={image4} alt="Terrasse aménagée par Paysagementpro" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-8 flex items-center gap-3 text-white">
                <span className="font-display font-light text-8xl md:text-9xl leading-none">10</span>
                <span className="font-display text-2xl md:text-4xl font-light leading-tight">
                  ans
                  <br />
                  d'expérience
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projets vedettes */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-ink">
        <div className="absolute inset-0" ref={projectsRef}>
          <div className="flex h-full">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="relative h-full flex-[0_0_100%]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
                <div className="absolute left-6 md:left-[30px] top-1/2 -translate-y-1/2 pr-6 text-white">
                  <p className="font-display text-xl md:text-2xl font-light">Projet vedette</p>
                  <h3 className="mt-2 font-display font-normal text-5xl md:text-7xl lg:text-[64px] leading-none tracking-[-0.02em]">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs en tirets */}
        <div className="absolute bottom-16 left-0 z-10 flex items-center gap-3 md:bottom-28">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => projectsApi?.scrollTo(idx)}
              aria-label={`Projet ${idx + 1}`}
              className={`h-px transition-all duration-500 ${
                idx === activeProject ? "w-12 bg-white" : "w-6 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Bouton « voir le projet » en viseur */}
        <Link
          href="/realisations"
          className="group absolute bottom-10 right-6 z-10 grid h-28 w-28 place-items-center text-center font-display text-sm leading-tight text-white md:bottom-16 lg:right-[calc(var(--rail-w)+3vw)]"
        >
          <span className="pointer-events-none absolute inset-x-0 top-3 h-px bg-white/80 transition-all group-hover:inset-x-3" />
          <span className="pointer-events-none absolute inset-x-0 bottom-3 h-px bg-white/80 transition-all group-hover:inset-x-3" />
          <span className="pointer-events-none absolute inset-y-0 left-3 w-px bg-white/80 transition-all group-hover:inset-y-3" />
          <span className="pointer-events-none absolute inset-y-0 right-3 w-px bg-white/80 transition-all group-hover:inset-y-3" />
          Voir le
          <br />
          projet
        </Link>

        <Rail variant="glass">
          <button
            onClick={nextProject}
            aria-label="Projet suivant"
            className="my-auto text-white transition-transform hover:translate-x-1.5"
          >
            <ArrowRight className="h-9 w-9 stroke-[1.25]" />
          </button>
        </Rail>
      </section>

      {/* Démarche */}
      <section className="relative py-24 md:py-40">
        <Rail variant="dark" />
        <div className="relative z-20 grid gap-16 px-6 md:px-[30px] lg:grid-cols-[1fr_1fr] lg:gap-[5vw] lg:pr-[calc(var(--rail-w)+4vw)]">
          <div>
            <AnimatedSection>
              <h2 className="font-display font-light text-5xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.02em]">
                la conception
                <br />
                n'est que
                <br />
                le début
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="mt-12">
              <ArrowLink href="/contact">Démarrer votre projet</ArrowLink>
            </AnimatedSection>
          </div>

          <div className="lg:pt-6">
            {STEPS.map((step, idx) => (
              <AnimatedSection key={step.title} delay={idx * 0.1}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink/15 py-8">
                  <span className="font-display text-sm text-ink/50 pt-2">0{idx + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-normal tracking-[-0.02em]">{step.title}</h3>
                    <p className="mt-3 max-w-sm text-[15px] leading-7 text-ink/75">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <div className="border-t border-ink/15" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative pb-24 md:pb-40">
        <Rail variant="dark" />
        <div className="relative z-20 px-6 md:px-[30px] lg:pr-[calc(var(--rail-w)+4vw)]">
          <AnimatedSection>
            <p className="font-display text-xl md:text-2xl font-light text-ink/60 mb-8">nos expertises</p>
          </AnimatedSection>
          {SERVICES.map((service, idx) => (
            <AnimatedSection key={service} delay={idx * 0.08}>
              <Link
                href="/services"
                className="group flex items-center justify-between gap-6 border-t border-ink/15 py-6 md:py-8"
              >
                <span className="font-display font-light text-3xl md:text-6xl tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-3">
                  {service}
                </span>
                <ArrowRight className="h-7 w-7 shrink-0 stroke-[1.25] transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </AnimatedSection>
          ))}
          <div className="border-t border-ink/15" />
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="relative h-[85vh] min-h-[520px] overflow-hidden">
        <img src={image5} alt="Aménagement extérieur" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-[30px] md:pb-24 lg:pr-[var(--rail-w)]">
          <AnimatedSection>
            <h2 className="font-display font-light text-white text-5xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.02em]">
              commencez votre
              <br />
              projet aujourd'hui
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-12">
            <ArrowLink href="/contact" tone="light">
              Demander une soumission
            </ArrowLink>
          </AnimatedSection>
        </div>
        <Rail variant="glass" />
      </section>

      {/* Mot de la fin */}
      <section className="relative pt-24 md:pt-32">
        <Rail variant="dark" />
        <div className="relative z-20 lg:pr-[var(--rail-w)]">
          <AnimatedSection className="px-6 md:px-[30px]">
            <h2 className="font-display font-normal text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-[-0.02em]">
              guidés par l'expérience
              <br />
              portés par le souci du détail
            </h2>
          </AnimatedSection>
          <div className="mt-16 flex items-center justify-between gap-6 border-t border-ink/15 px-6 py-8 md:px-[30px]">
            <p className="font-display text-lg md:text-2xl font-normal">
              Une question ou une demande particulière pour votre terrain? Écrivez-nous.
            </p>
            <ArrowLink href="/contact" label="Nous joindre" />
          </div>
        </div>
      </section>
    </div>
  );
}
