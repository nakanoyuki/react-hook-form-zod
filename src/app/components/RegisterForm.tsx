// src/components/RegisterForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormInputs } from "../schemas/registerSchema";
import { sendRegisterRequest } from "../lib/api";
import { TextInput } from "./form/TextInput";
import { FormError } from "./form/FormError";

const formfields = [
  {
    name: "name",
    label: "名前",
    placeholder: "名前",
  },
  {
    name: "email",
    label: "メールアドレス",
    placeholder: "メールアドレス",
  },
  {
    name: "password",
    label: "パスワード",
    placeholder: "パスワード",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "パスワード確認",
    placeholder: "パスワード確認",
    type: "password",
  },
] as const;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    const res = await sendRegisterRequest(data);
    console.log("API Response:", res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {formfields.map((field) => (
        <div key={field.name}>
          <TextInput
            {...register(field.name)}
            label={field.label}
            name={field.name}
            placeholder={field.label}
          />
          <FormError errormessage={errors[field.name]?.message} />
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        登録
      </button>
    </form>
  );
};
