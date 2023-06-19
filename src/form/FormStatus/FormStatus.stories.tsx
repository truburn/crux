import type { Meta, StoryObj } from "@storybook/react";
import { FormStatus as FormStatusComponent } from "@/form/FormStatus";

const meta: Meta<typeof FormStatusComponent> = {
  component: FormStatusComponent,
};
export default meta;

type Story = StoryObj<typeof FormStatusComponent>;

export const FormStatus: Story = {};
