import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(1, {
    message: "Password is required too!",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(6, {
    message: "Minimum is 6 characters required!",
  }),
  name: z.string().min(1, {
    message: "name is required!",
  }),
});
