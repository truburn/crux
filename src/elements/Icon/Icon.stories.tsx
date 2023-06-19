import type { Meta, StoryObj } from "@storybook/react";
import { Icon as IconComponent } from "@/elements/Icon";

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
};
export default meta;

type Story = StoryObj<typeof IconComponent>;

export const Icon: Story = {};
