# PROJET

**Date** : 2026-08-04

## Prompt initial

tu vois le pied de page lorsque je clique sur les liens qui mene vers le page du site web cela me laisse ne bas de la page mais ne me ramene pas en haut de la page que j'ai cliqu├®

## Décisions importantes

- **Mise en conformité Loi 25 (protection des renseignements personnels, Québec)** :
  - Création de la page `/politique-de-confidentialite` (`client/src/pages/PolitiqueConfidentialite.tsx`), couvrant : renseignements collectés (formulaire de contact, absence actuelle de cookies analytics), finalités, mesures de sécurité, identité du responsable de la protection des renseignements personnels (RPRP), et droits d'accès/rectification.
  - Ajout d'un lien vers cette page dans le footer (visible sur toutes les pages).
  - Ajout d'une case à cocher de consentement explicite sur le formulaire de contact, obligatoire avant l'envoi (`consent` requis à `true` via Zod dans `shared/schema.ts`), avec colonne `consent` (boolean) ajoutée à la table `contact_messages` — nécessite `npm run db:push` pour appliquer le changement de schéma en base.
  - Le RPRP désigné (nom : Gabriel, courriel : gabrielrakotor40@outlook.com, tél : 581-979-2198) est indiqué sur la page de politique de confidentialité; ces mêmes coordonnées (fictives, site de démonstration) remplacent les anciennes coordonnées dans le Footer et la page Contact.
- **Loi 96 (langue française)** : le site était déjà entièrement en français sans version anglaise; correction de l'attribut `lang="en"` → `lang="fr-CA"` dans `client/index.html`, ajout d'un `<title>` et d'une meta description en français.
- **Logo officiel** (fourni par Gabriel, `OIG3.jpg`) : recadré, fond blanc rendu transparent → `attached_assets/logo-paysagementpro.png` (480 px). Utilisé dans la Navbar (passé en blanc via `brightness-0 invert` par-dessus la photo d'accueil) et le Footer. Icône d'onglet = sapin seul → `client/public/favicon.png` (192 px, aussi `apple-touch-icon`). Remplace la feuille Lucide et l'ancien favicon Replit.
- **Refonte style « Cedar Springs » (cedarsprings.net) — 2026-10-10** :
  - Police d'affichage **Epilogue** (300/400, titres géants en minuscules, `font-display`), encre `--ink` quasi noire, fond blanc.
  - **Colonne de droite** signature (`--rail-w` = 20vw dès `lg`, 0 sur mobile) : pleine et sombre (`bg-rail`) sur les sections blanches, verre flouté sur les photos (composant `Rail` dans `Home.tsx`).
  - Liens « Libellé | → » via `components/ArrowLink.tsx` au lieu des boutons arrondis.
  - Accueil : hero plein écran, intro + « 10 ans d'expérience », carrousel « Projet vedette », démarche en 3 étapes, liste des expertises, CTA photo, mot de la fin.
  - Page Services calquée sur cedarsprings.net/projects : grand titre + fiches services encadrées en zigzag (photo + titre + soumission). Pas de galerie ni de CTA final (retirés à la demande de Gabriel : la galerie vit sur Réalisations). `Rail` sorti dans `components/Rail.tsx` (variantes dark / light / glass).
  - Page Réalisations : fond blanc (colonne de droite claire), grand titre, filtres par service, cartes 3 colonnes (titre sur la photo, prestations au survol), agrandissement au clic.
  - Page Nous joindre : même typo/style (titre géant, coordonnées en liste à filets, carte en niveaux de gris, formulaire encadré à champs soulignés, envoi « Envoyer la demande | → »). Logique du formulaire et consentement Loi 25 inchangés.
  - Navbar et Footer (partagés par toutes les pages) refaits dans le même style : menu hamburger aligné sur la colonne de droite, panneau sombre; footer en grille à filets fins.

## Stack choisie

- Frontend : React + TypeScript (Vite), Wouter (routing), Tailwind CSS, shadcn/ui (Radix), Framer Motion.
- Formulaires : react-hook-form + Zod (via `@hookform/resolvers`).
- Backend : Express (Node.js/TypeScript), Drizzle ORM + PostgreSQL.
- Déploiement : Vercel.