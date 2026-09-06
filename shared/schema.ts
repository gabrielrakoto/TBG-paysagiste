import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  consent: boolean("consent").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages)
  .omit({ id: true, createdAt: true })
  .extend({
    consent: z.boolean().refine((val) => val === true, {
      message: "Vous devez accepter l'utilisation de vos renseignements pour envoyer le formulaire.",
    }),
  });

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
