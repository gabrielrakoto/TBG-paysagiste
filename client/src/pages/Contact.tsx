import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { insertContactMessageSchema } from "@shared/schema";
import type { ContactMessageInput } from "@shared/routes";

export default function Contact() {
  const mutation = useCreateContactMessage();
  
  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
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
    <div className="min-h-screen bg-background pt-24 pb-16">
      <section className="container px-4 md:px-6 mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto pt-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Nous Joindre</h1>
          <p className="text-lg text-muted-foreground">
            Prêt à transformer votre extérieur ? Contactez-nous dès aujourd'hui pour une soumission gratuite. Notre équipe a hâte de réaliser votre projet.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Information & Map */}
          <AnimatedSection delay={0.1} className="space-y-8">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-xl"></div>
              
              <h2 className="text-2xl font-serif font-bold mb-8 relative z-10">Informations de Contact</h2>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Notre Adresse</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      1800 Rue Bresse,<br />
                      Québec, QC G2G 2P2
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                    <p className="text-primary-foreground/80">(418) 575-8529</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Courriel</h3>
                    <p className="text-primary-foreground/80">gelinasjeff01@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Heures d'ouverture</h3>
                    <p className="text-primary-foreground/80">
                      Lun - Ven : 8h00 - 17h00<br />
                      Sam - Dim : Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] border border-border bg-muted">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x4cb8912e75e11dcb%3A0xc3cf909d7c3b885f!2s1800%20Rue%20Bresse%2C%20Qu%C3%A9bec%2C%20QC%20G2G%202P2%2C%20Canada!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation"
              ></iframe>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Envoyez-nous un message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean Tremblay" className="h-12 bg-muted/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Courriel</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jean@exemple.com" className="h-12 bg-muted/50" {...field} />
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
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="(418) 555-1234" className="h-12 bg-muted/50" {...field} />
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
                        <FormLabel>Votre Projet</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez-nous vos besoins (aménagement paysager, piscine, terrassement...)" 
                            className="min-h-[150px] resize-none bg-muted/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 rounded-xl text-base shadow-lg hover:shadow-xl transition-all"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Envoi en cours..." : "Envoyer la demande"}
                  </Button>
                </form>
              </Form>
            </div>
          </AnimatedSection>
          
        </div>
      </section>
    </div>
  );
}
