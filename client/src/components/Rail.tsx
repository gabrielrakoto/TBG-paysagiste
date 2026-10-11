import type { ReactNode } from "react";

const VARIANTS = {
  dark: "bg-rail",
  light: "bg-white border-l border-ink/15",
  glass: "bg-white/15 backdrop-blur-xl border-l border-white/25",
};

/* Colonne de droite (desktop seulement) : pleine sur fond uni, en verre flouté sur les photos */
export function Rail({ variant, children }: { variant: keyof typeof VARIANTS; children?: ReactNode }) {
  return (
    <div
      className={`absolute inset-y-0 right-0 z-10 hidden lg:flex w-[var(--rail-w)] flex-col items-center ${VARIANTS[variant]}`}
    >
      {children}
    </div>
  );
}
