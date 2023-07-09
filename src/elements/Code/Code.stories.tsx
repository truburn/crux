import type { Meta, StoryObj } from "@storybook/react";
import { Code as CodeComponent } from "@/elements/Code";

const meta: Meta<typeof CodeComponent> = {
  component: CodeComponent,
};
export default meta;

type Story = StoryObj<typeof CodeComponent>;

export const Code: Story = {};
