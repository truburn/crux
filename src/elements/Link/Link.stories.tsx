import type { Meta, StoryObj } from "@storybook/react";
import { Link as LinkComponent } from "@/elements/Link";

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
};
export default meta;

type Story = StoryObj<typeof LinkComponent>;

export const Link: Story = {};
