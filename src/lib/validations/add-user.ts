import { z } from "zod";

export const addUserValidation = z.object({
  email: z.string().email(),
});
