import type { Meta, StoryObj } from "@storybook/react";
import { Switch as SwitchComponent } from "@/form/Switch";

const meta: Meta<typeof SwitchComponent> = {
  component: SwitchComponent,
};
export default meta;

type Story = StoryObj<typeof SwitchComponent>;

export const Switch: Story = {};
