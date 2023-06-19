import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote as BlockquoteComponent } from "@/elements/Blockquote";

const meta: Meta<typeof BlockquoteComponent> = {
  component: BlockquoteComponent,
};
export default meta;

type Story = StoryObj<typeof BlockquoteComponent>;

export const Blockquote: Story = {};
