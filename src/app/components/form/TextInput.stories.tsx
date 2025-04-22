// src/components/TextInput.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "Components/TextInput",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "名前",
    placeholder: "名前を入力",
  },
};

export const WithError: Story = {
  args: {
    label: "名前",
    placeholder: "名前を入力",
  },
};
