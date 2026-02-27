import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { ContactMessageInput, ContactMessageResponse } from "@shared/routes";
import { z } from "zod";

export function useCreateContactMessage() {
  const { toast } = useToast();

  return useMutation<ContactMessageResponse, Error, ContactMessageInput>({
    mutationFn: async (data: ContactMessageInput) => {
      // Client side validation just to be sure
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          const parsedError = api.contact.create.responses[400].safeParse(errorData);
          throw new Error(parsedError.success ? parsedError.data.message : "Erreur de validation");
        }
        throw new Error("Une erreur inattendue s'est produite");
      }
      
      const responseData = await res.json();
      return api.contact.create.responses[201].parse(responseData);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous avons bien reçu votre demande. Nous vous contacterons sous peu.",
      });
    },
    onError: (error) => {
      console.error("[Contact Form] Error:", error);
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi",
        description: error.message || "Veuillez réessayer plus tard.",
      });
    },
  });
}
