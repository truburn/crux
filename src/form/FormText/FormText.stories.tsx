import type { Meta, StoryObj } from "@storybook/react";
import { FormText as FormTextComponent } from "./FormText";

const meta: Meta<typeof FormTextComponent> = {
  component: FormTextComponent,
};
export default meta;

type Story = StoryObj<typeof FormTextComponent>;

export const FormText: Story = {};
