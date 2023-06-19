import type { Meta, StoryObj } from "@storybook/react";
import { Layout as LayoutComponent } from "@/template/Layout";

const meta: Meta<typeof LayoutComponent> = {
  component: LayoutComponent,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof LayoutComponent>;

export const Layout: Story = {};
