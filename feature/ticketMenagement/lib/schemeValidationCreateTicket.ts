import { z } from "zod";

export const createTicketSchema = (t: (key: string) => string) => z.object({
  nameClient: z
    .string({ message: t("errorsScreen.nameClientRequired") })
    .min(2, t("errorsScreen.nameClientMin")),
  email: z
    .string({ message: t("errorsScreen.emailRequired") })
    .email(t("errorsScreen.emailInvalid")),
  priority: z
    .string({ message: t("errorsScreen.priorityRequired") })
   ,
  responsible: z
    .string({ message: t("errorsScreen.responsibleRequired") }),
  subject: z
    .string({ message: t("errorsScreen.subjectRequired") })
    .min(1, t("errorsScreen.subjectRequiredMin")),
});
export type CreateTicketSchema = z.infer<typeof createTicketSchema>;