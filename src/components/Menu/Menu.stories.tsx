import type { Meta, StoryObj } from "@storybook/react";
import { Menu as MenuComponent } from "@/components/Menu";

const meta: Meta<typeof MenuComponent> = {
  component: MenuComponent,
};
export default meta;

type Story = StoryObj<typeof MenuComponent>;

export const Menu: Story = {};
