import type { Meta, StoryObj } from "@storybook/react";
import { FormHelp as FormHelpComponent } from "@/form/FormHelp";

const meta: Meta<typeof FormHelpComponent> = {
  component: FormHelpComponent,
};
export default meta;

type Story = StoryObj<typeof FormHelpComponent>;

export const FormHelp: Story = {};
