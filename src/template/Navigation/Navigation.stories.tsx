import type { Meta, StoryObj } from "@storybook/react";
import { Navigation as NavigationComponent } from "@/template/Navigation";

const meta: Meta<typeof NavigationComponent> = {
  component: NavigationComponent,
};
export default meta;

type Story = StoryObj<typeof NavigationComponent>;

export const Navigation: Story = {};
