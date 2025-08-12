import * as z from "zod";

export type LoginSchema = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "Field is required"),
});
