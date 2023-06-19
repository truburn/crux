import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "@/form/Checkbox";

const meta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
};
export default meta;

type Story = StoryObj<typeof CheckboxComponent>;

export const Checkbox: Story = {};
