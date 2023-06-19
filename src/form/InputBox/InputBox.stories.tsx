import type { Meta, StoryObj } from "@storybook/react";
import { InputBox as InputBoxComponent } from "@/form/InputBox";

const meta: Meta<typeof InputBoxComponent> = {
  component: InputBoxComponent,
};
export default meta;

type Story = StoryObj<typeof InputBoxComponent>;

export const InputBox: Story = {};
