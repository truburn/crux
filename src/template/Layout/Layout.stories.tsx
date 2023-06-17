import type { Meta, StoryObj } from "@storybook/react";
import { Layout as LayoutComponent } from "./Layout";

const meta: Meta<typeof LayoutComponent> = {
  component: LayoutComponent,
};
export default meta;

type Story = StoryObj<typeof LayoutComponent>;

export const Layout: Story = {};
