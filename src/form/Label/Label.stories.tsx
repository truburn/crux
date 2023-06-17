import type { Meta, StoryObj } from "@storybook/react";
import { Label as LabelComponent } from "./Label";

const meta: Meta<typeof LabelComponent> = {
  component: LabelComponent,
};
export default meta;

type Story = StoryObj<typeof LabelComponent>;

export const Label: Story = {};
