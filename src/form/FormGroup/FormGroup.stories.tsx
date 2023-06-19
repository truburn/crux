import type { Meta, StoryObj } from "@storybook/react";
import { FormGroup as FormGroupComponent } from "@/form/FormGroup";

const meta: Meta<typeof FormGroupComponent> = {
  component: FormGroupComponent,
};
export default meta;

type Story = StoryObj<typeof FormGroupComponent>;

export const FormGroup: Story = {};
