import { Link } from "wouter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Rail } from "@/components/Rail";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { insertContactMessageSchema } from "@shared/schema";
import type { ContactMessageInput } from "@shared/routes";

// Champs soulignés, sans boîte ni ombre
const FIELD =
  "h-12 rounded-none border-0 border-b border-ink/25 bg-transparent px-0 text-base shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-ink";
const LABEL = "font-display text-sm font-normal text-ink/60";

const CONTACT_INFO = [
  { label: "Adresse", value: <>1800 Rue Bresse,<br />Québec, QC G2G 2N8</> },
  { label: "Téléphone", value: "581-979-2198" },
  { label: "Courriel", value: "gabrielrakotor40@outlook.com" },
  { label: "Heures", value: <>Lun - Ven : 8h00 - 17h00<br />Sam - Dim : Fermé</> },
];

export default function Contact() {
  const mutation = useCreateContactMessage();

  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = (data: ContactMessageInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="bg-white pt-20 text-ink">
      <section className="relative pb-24 md:pb-32">
        <Rail variant="light" />
        <div className="relative z-20 px-6 md:px-[30px] lg:pr-[var(--rail-w)]">
          <AnimatedSection className="pt-16 pb-14 md:pt-28 md:pb-20">
            <h1 className="font-display font-light text-6xl md:text-8xl lg:text-[88px] leading-[0.95] tracking-[-0.02em]">
              nous joindre
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-7 text-ink/70">
              Prêt à transformer votre extérieur ? Contactez-nous dès aujourd'hui pour une soumission gratuite. Notre équipe a hâte de réaliser votre projet.
            </p>
          </AnimatedSection>

          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-[5vw] lg:pr-[3vw]">

            {/* Coordonnées et carte */}
            <AnimatedSection delay={0.1}>
              <dl className="border-t border-ink/15">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="grid grid-cols-[100px_1fr] gap-4 border-b border-ink/15 py-6">
                    <dt className="pt-1 font-display text-sm text-ink/50">{item.label}</dt>
                    <dd className="break-words font-display text-lg md:text-xl leading-snug">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 h-[300px] overflow-hidden border border-ink/15 bg-[#f2f2f2]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.8066126255267!2d-71.38684289999999!3d46.8081152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb899a1bc9bb7e5%3A0xee77ca8083d08aaa!2s1800%20Rue%20Bresse%2C%20Qu%C3%A9bec%2C%20QC%20G2G%202N8!5e0!3m2!1sfr!2sca!4v1772170258642!5m2!1sfr!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1)" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de localisation"
                ></iframe>
              </div>
            </AnimatedSection>

            {/* Formulaire */}
            <AnimatedSection delay={0.2}>
              <div className="border border-ink/15 p-6 md:p-10">
                <h2 className="mb-10 font-display font-normal text-3xl md:text-5xl tracking-[-0.02em]">
                  envoyez-nous un message
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={LABEL}>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Tremblay" className={FIELD} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-8 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={LABEL}>Courriel</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jean@exemple.com" className={FIELD} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className={LABEL}>Téléphone</FormLabel>
                            <FormControl>
                              <Input placeholder="(418) 555-1234" className={FIELD} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={LABEL}>Votre projet</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Décrivez-nous vos besoins (aménagement paysager, piscine, terrassement...)"
                              className="min-h-[150px] resize-none rounded-none border-ink/25 bg-transparent text-base shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-ink"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start gap-3 border-t border-ink/15 pt-6">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-0.5 rounded-none"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-relaxed">
                            <FormLabel className="text-sm font-normal leading-relaxed text-ink/75">
                              J'accepte que mes renseignements soient utilisés pour me recontacter au sujet de ma demande, conformément à la{" "}
                              <Link href="/politique-de-confidentialite" className="text-ink underline underline-offset-2 hover:opacity-70">
                                politique de confidentialité
                              </Link>.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl disabled:opacity-50"
                    >
                      {mutation.isPending ? "Envoi en cours..." : "Envoyer la demande"}
                      <span className="h-10 w-px bg-current" aria-hidden="true" />
                      <ArrowRight
                        className="h-6 w-6 stroke-[1.25] transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      />
                    </button>
                  </form>
                </Form>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  );
}
