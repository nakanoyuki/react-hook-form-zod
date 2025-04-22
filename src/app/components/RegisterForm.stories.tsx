// src/components/RegisterForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "./RegisterForm";

const meta: Meta<typeof RegisterForm> = {
  component: RegisterForm,
  title: "Forms/RegisterForm",
};

export default meta;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};
