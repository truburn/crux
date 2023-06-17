import type { Meta, StoryObj } from "@storybook/react";
import { Radio as RadioComponent } from "./Radio";

const meta: Meta<typeof RadioComponent> = {
  component: RadioComponent,
};
export default meta;

type Story = StoryObj<typeof RadioComponent>;

export const Radio: Story = {};
