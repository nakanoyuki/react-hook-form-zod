import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RegisterForm } from "@/app/components/RegisterForm";
import * as api from "@/app/lib/api";

jest.mock("@/app/lib/api", () => ({
  sendRegisterRequest: jest.fn(),
}));

describe("RegisterForm", () => {
  it("renders all input fields", () => {
    render(<RegisterForm />);
    expect(screen.getByLabelText("名前")).toBeInTheDocument();
    expect(screen.getByLabelText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByLabelText("パスワード")).toBeInTheDocument();
    expect(screen.getByLabelText("パスワード確認")).toBeInTheDocument();
  });

  it("shows validation errors on submit without input", async () => {
    render(<RegisterForm />);
    fireEvent.click(screen.getByText("登録"));

    await waitFor(() => {
      expect(
        screen.getByText("名前は2文字以上で入力してください")
      ).toBeInTheDocument();
      expect(
        screen.getByText("有効なメールアドレスを入力してください")
      ).toBeInTheDocument();
      expect(
        screen.getByText("6文字以上で入力してください")
      ).toBeInTheDocument();
    });
  });

  it("submits form when valid data is entered", async () => {
    const mockSendRegister = jest.spyOn(api, "sendRegisterRequest");
    // .mockResolvedValue({ success: true });

    render(<RegisterForm />);
    fireEvent.input(screen.getByLabelText("名前"), {
      target: { value: "太郎" },
    });
    fireEvent.input(screen.getByLabelText("メールアドレス"), {
      target: { value: "taro@example.com" },
    });
    fireEvent.input(screen.getByLabelText("パスワード"), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByLabelText("パスワード確認"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("登録"));

    await waitFor(() => {
      expect(mockSendRegister).toHaveBeenCalledWith({
        name: "太郎",
        email: "taro@example.com",
        password: "password123",
        confirmPassword: "password123",
      });
    });
  });
});
