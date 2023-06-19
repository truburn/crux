import type { Meta, StoryObj } from "@storybook/react";
import { Footer as FooterComponent } from "@/template/Footer";

const meta: Meta<typeof FooterComponent> = {
  component: FooterComponent,
};
export default meta;

type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {};
