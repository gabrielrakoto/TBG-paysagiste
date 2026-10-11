import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Leaf } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ArrowLink } from "@/components/ArrowLink";
import { motion } from "framer-motion";

const routes = [
  { path: "/", label: "accueil" },
  { path: "/services", label: "nos services" },
  { path: "/realisations", label: "nos réalisations" },
  { path: "/contact", label: "nous joindre" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent par-dessus la photo d'accueil, blanc partout ailleurs
  const solid = isScrolled || location !== "/";
  const lineColor = solid ? "border-ink/15" : "border-white/30";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 border-b transition-colors duration-300 ${lineColor} ${
        solid ? "bg-white text-ink" : "bg-transparent text-white"
      }`}
    >
      <div className="flex h-full items-center">
        <div className="flex flex-1 items-center justify-between gap-6 px-6 md:px-[30px]">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className={`h-7 w-7 ${solid ? "text-primary" : "text-white"}`} />
            <span className="font-serif text-2xl font-bold tracking-tight">Paysagementpro</span>
          </Link>

          <ArrowLink
            href="/contact"
            tone={solid ? "dark" : "light"}
            className="hidden md:inline-flex text-lg md:text-xl [&>span:nth-child(2)]:h-8"
          >
            Démarrer votre projet
          </ArrowLink>
        </div>

        {/* Case du menu, alignée sur la colonne de droite */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className={`flex h-full items-center justify-center px-6 lg:w-[var(--rail-w)] lg:border-l ${lineColor}`}
              aria-label="Ouvrir le menu"
            >
              <span className="flex w-8 flex-col gap-2">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full flex-col border-l-0 bg-rail px-8 pt-24 text-white sm:max-w-md [&>button]:text-white"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-white/15 py-5 font-display text-4xl font-light tracking-[-0.02em] transition-opacity hover:opacity-100 ${
                    location === route.path ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-10" onClick={() => setIsOpen(false)}>
              <ArrowLink href="/contact" tone="light">
                Demander une soumission
              </ArrowLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
