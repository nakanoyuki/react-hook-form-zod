// src/components/RegisterForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormInputs } from "../schemas/registerSchema";
import { sendRegisterRequest } from "../lib/api";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    const res = await sendRegisterRequest(data);
    console.log("API Response:", res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name")} placeholder="名前" className="border p-2" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        {...register("email")}
        placeholder="メールアドレス"
        className="border p-2"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="password"
        {...register("password")}
        placeholder="パスワード"
        className="border p-2"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="パスワード確認"
        className="border p-2"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white px-4 py-2"
      >
        登録
      </button>
    </form>
  );
};
