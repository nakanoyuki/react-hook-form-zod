// src/schemas/registerSchema.ts
import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "名前は2文字以上で入力してください"),
    email: z.string().email("有効なメールアドレスを入力してください"),
    password: z.string().min(6, "6文字以上で入力してください"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "パスワードが一致しません",
    path: ["confirmPassword"],
  });

export type RegisterFormInputs = z.infer<typeof registerSchema>;
