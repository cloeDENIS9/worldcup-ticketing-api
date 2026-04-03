import * as z from "zod";

export const CreateTicketSchema = z.object({
    matchId: z.number().int().positive(),
    seat: z.string().min(1).max(10),
    customer: z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email() // source https://docs.astro.build/fr/reference/modules/astro-zod/
    })
});