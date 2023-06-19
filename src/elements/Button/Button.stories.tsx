import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from "@/elements/Button";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
};
export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {};
