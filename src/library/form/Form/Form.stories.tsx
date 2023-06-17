import type { Meta, StoryObj } from "@storybook/react";
import { Form as FormComponent } from "./Form";

const meta: Meta<typeof FormComponent> = {
  component: FormComponent,
};
export default meta;

type Story = StoryObj<typeof FormComponent>;

export const Form: Story = {};
