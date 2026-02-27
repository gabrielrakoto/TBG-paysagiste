import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const routes = [
  { path: "/", label: "Accueil" },
  { path: "/services", label: "Nos Services" },
  { path: "/realisations", label: "Nos Réalisations" },
  { path: "/contact", label: "Nous Joindre" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Leaf className={`h-8 w-8 transition-colors ${isScrolled ? "text-primary" : "text-primary md:text-white"}`} />
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-foreground md:text-white"}`}>
              ÉdenPaysage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === route.path
                    ? isScrolled ? "text-primary" : "text-white"
                    : isScrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                {route.label}
              </Link>
            ))}
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">Devis Gratuit</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-primary md:text-white"}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col pt-16">
              <nav className="flex flex-col gap-6">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-serif font-medium transition-colors hover:text-primary ${
                      location === route.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="pt-6 border-t mt-4">
                  <Button asChild size="lg" className="w-full rounded-full" onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Demander un Devis</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
