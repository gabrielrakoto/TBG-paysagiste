import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { ContactMessageInput } from "@shared/routes";

// Site fictif : le formulaire est une démonstration. Les données sont validées
// côté client puis abandonnées, aucune requête réseau n'est faite.
export function useCreateContactMessage() {
  const { toast } = useToast();

  return useMutation<void, Error, ContactMessageInput>({
    mutationFn: async (data: ContactMessageInput) => {
      api.contact.create.input.parse(data);
      await new Promise((resolve) => setTimeout(resolve, 800));
    },
    onSuccess: () => {
      toast({
        title: "Merci !",
        description: "Ceci est une démonstration : aucun message n'a été envoyé.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message || "Veuillez vérifier les champs du formulaire.",
      });
    },
  });
}
