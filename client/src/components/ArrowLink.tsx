import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  /** Libellé accessible quand le lien n'affiche que la flèche */
  label?: string;
}

// Lien texte « Libellé | → » (remplace les boutons arrondis)
export function ArrowLink({ href, children, tone = "dark", className, label }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group inline-flex items-center gap-4 font-display text-xl md:text-2xl font-normal",
        tone === "light" ? "text-white" : "text-ink",
        className,
      )}
    >
      {children && <span>{children}</span>}
      <span className="h-10 w-px bg-current" aria-hidden="true" />
      <ArrowRight
        className="h-6 w-6 stroke-[1.25] transition-transform duration-300 group-hover:translate-x-1.5"
        aria-hidden="true"
      />
    </Link>
  );
}
