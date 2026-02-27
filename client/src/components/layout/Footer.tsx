import { Link } from "wouter";
import { Leaf, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold tracking-tight">
                ÉdenPaysage
              </span>
            </Link>
            <p className="text-muted/80 text-sm leading-relaxed">
              Créateurs d'espaces extérieurs d'exception à Québec. Nous transformons votre vision en une oasis naturelle et durable.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-muted/80">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Nos Services</Link></li>
              <li><Link href="/realisations" className="hover:text-primary transition-colors">Nos Réalisations</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Nous Joindre</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Nos Services</h4>
            <ul className="space-y-2 text-sm text-muted/80">
              <li>Aménagement Paysager</li>
              <li>Embellissement de Piscines</li>
              <li>Jardins Décoratifs</li>
              <li>Terrassement</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-muted/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1800 Rue Bresse,<br/>Québec, QC G2G 2P2</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(418) 575-8529</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>gelinasjeff01@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
          <p>© {new Date().getFullYear()} ÉdenPaysage. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
