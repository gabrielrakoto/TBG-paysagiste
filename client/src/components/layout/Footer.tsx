import { Link } from "wouter";
import { Leaf, Instagram, Facebook } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/contact", label: "Nous joindre" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-white text-ink">
      <div className="lg:grid lg:grid-cols-[1fr_var(--rail-w)]">
        <div className="grid gap-12 px-6 py-14 md:grid-cols-2 md:px-[30px]">
          <div className="space-y-5">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-ink/80">
              <li>581-979-2198</li>
              <li>gabrielrakotor40@outlook.com</li>
              <li>1800 Rue Bresse, Québec, QC G2G 2N8</li>
            </ul>
          </div>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-5 content-start">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-display text-lg font-semibold transition-opacity hover:opacity-60">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 border-t border-ink/15 py-12 lg:border-l lg:border-t-0">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-primary" />
            <span className="font-serif text-2xl font-bold tracking-tight">Paysagementpro</span>
          </Link>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-60">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-60">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/15 lg:grid lg:grid-cols-[1fr_var(--rail-w)]">
        <div className="flex flex-col gap-3 px-6 py-6 text-sm text-ink/70 md:flex-row md:justify-between md:px-[30px]">
          <p>© {new Date().getFullYear()} Paysagementpro. Tous droits réservés.</p>
          <Link href="/politique-de-confidentialite" className="transition-colors hover:text-ink">
            Politique de confidentialité
          </Link>
        </div>
        <div className="hidden lg:block lg:border-l lg:border-ink/15" />
      </div>
    </footer>
  );
}
