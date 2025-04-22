// src/lib/api.ts
import { RegisterFormInputs } from "../schemas/registerSchema";

export const sendRegisterRequest = async (data: RegisterFormInputs) => {
  await new Promise((res) => setTimeout(res, 1000)); // 擬似的な遅延
  return {
    success: true,
    userId: "dummy-user-id",
    ...data,
  };
};
