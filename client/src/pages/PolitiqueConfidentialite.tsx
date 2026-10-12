import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <section className="container px-4 md:px-6 mx-auto max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-muted-foreground">
            Dernière mise à jour : 11 octobre 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-sm space-y-4">
            <p className="text-muted-foreground leading-relaxed m-0">
              <strong>Avis — site fictif.</strong> Paysagementpro est une entreprise fictive; ce site a
              été réalisé à des fins de démonstration pour un portfolio. Le formulaire de contact est une
              démonstration : les renseignements saisis ne sont <strong>ni envoyés, ni enregistrés, ni
              conservés</strong>. La présente politique illustre celle qu'appliquerait l'entreprise si
              elle était réelle.
            </p>
            <p className="text-muted-foreground leading-relaxed m-0">
              Paysagementpro (« nous », « notre » ou « nos ») s'engage à protéger la vie privée des
              personnes qui visitent ce site web et qui communiquent avec nous. Cette politique décrit
              les renseignements personnels que nous recueillons, la façon dont nous les utilisons, les
              protégeons et les conservons, ainsi que les droits dont vous disposez, conformément à la{" "}
              <strong>Loi 25</strong> (Loi modernisant des dispositions législatives en matière de
              protection des renseignements personnels) applicable au Québec.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              1. Quels renseignements personnels recueillons-nous
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous recueillons des renseignements personnels uniquement lorsque vous nous les fournissez
              volontairement, notamment :
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc pl-6">
              <li>
                <strong>Formulaire de contact / demande de soumission :</strong> nom complet, adresse
                courriel, numéro de téléphone et le contenu de votre message (description de votre
                projet).
              </li>
              <li>
                <strong>Cookies et données de navigation :</strong> ce site n'utilise aucun cookie
                ni outil d'analyse (ex. Google Analytics, Meta Pixel), et aucun service tiers n'est
                contacté au chargement des pages : les polices de caractères sont hébergées sur le site
                lui-même. L'hébergeur (Vercel) traite techniquement votre adresse IP pour afficher les
                pages, sur des serveurs qui peuvent être situés hors du Québec. La carte de la page
                Contact (OpenStreetMap) ne se charge que si vous cliquez sur « Afficher la carte »; votre
                adresse IP est alors transmise à la Fondation OpenStreetMap. Si un outil de suivi était
                ajouté, il ne serait activé qu'après votre consentement, au moyen d'une bannière.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              2. Pourquoi nous recueillons ces renseignements et comment nous les utilisons
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Les renseignements personnels recueillis via le formulaire de contact sont utilisés
              exclusivement pour :
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc pl-6">
              <li>Répondre à votre demande d'information ou de soumission;</li>
              <li>Communiquer avec vous au sujet de votre projet d'aménagement paysager;</li>
              <li>Assurer le suivi administratif de nos échanges.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Nous ne vendons, ne louons ni ne partageons vos renseignements personnels avec des tiers à
              des fins commerciales ou publicitaires. Vos renseignements ne sont utilisés que pour la
              finalité pour laquelle vous nous les avez transmis, et uniquement après avoir obtenu votre
              consentement explicite au moment de l'envoi du formulaire.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              3. Comment nous protégeons vos renseignements
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous mettons en place des mesures de sécurité raisonnables, adaptées à la sensibilité des
              renseignements recueillis, afin de les protéger contre la perte, le vol ainsi que l'accès,
              la divulgation, la copie, l'utilisation ou la modification non autorisés, notamment :
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc pl-6">
              <li>Transmission des données du formulaire chiffrée (HTTPS/TLS);</li>
              <li>Accès aux renseignements limité aux personnes qui doivent y avoir accès pour traiter votre demande;</li>
              <li>Conservation des renseignements uniquement pour la durée nécessaire à l'atteinte des fins pour lesquelles ils ont été recueillis, après quoi ils sont détruits ou anonymisés de façon sécuritaire.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              4. Responsable de la protection des renseignements personnels (RPRP)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément à la Loi 25, une personne est désignée responsable de la protection des
              renseignements personnels au sein de notre entreprise. Toute question, plainte ou demande
              relative à la présente politique ou au traitement de vos renseignements personnels peut lui
              être adressée directement :
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 space-y-3">
              <p className="font-semibold text-foreground m-0">
                Gabriel
              </p>
              <p className="text-sm text-muted-foreground m-0">
                Responsable de la protection des renseignements personnels (RPRP) — Paysagementpro
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2 text-sm">
                <a href="mailto:gabrielrakotor40@outlook.com" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Mail className="h-4 w-4" />
                  gabrielrakotor40@outlook.com
                </a>
                <a href="tel:+14185550187" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Phone className="h-4 w-4" />
                  418-555-0187
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              5. Accès, rectification et retrait de votre consentement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vous avez le droit en tout temps de :
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc pl-6">
              <li>Demander l'accès aux renseignements personnels que nous détenons à votre sujet;</li>
              <li>Demander la correction de renseignements inexacts, incomplets ou périmés;</li>
              <li>Retirer votre consentement à l'utilisation de vos renseignements ou demander leur suppression;</li>
              <li>Déposer une plainte auprès de la Commission d'accès à l'information du Québec (CAI) si vous estimez que vos droits n'ont pas été respectés.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Pour exercer l'un de ces droits, communiquez avec notre responsable de la protection des
              renseignements personnels aux coordonnées indiquées à la section 4. Nous répondrons à votre
              demande au plus tard dans les 30 jours suivant sa réception, conformément à la Loi 25.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              6. Modifications à cette politique
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cette politique peut être mise à jour occasionnellement afin de refléter des changements
              dans nos pratiques ou pour d'autres motifs opérationnels, légaux ou réglementaires. La date
              de la dernière mise à jour est indiquée en haut de cette page.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
