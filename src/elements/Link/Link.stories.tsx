import type { Meta, StoryObj } from "@storybook/react";
import { Link as LinkComponent } from "@/elements/Link";

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
  parameters: {
    layout: "centered",
  },
  args: {
    to: "#",
    children: "Link Text",
  },
};
export default meta;

type Story = StoryObj<typeof LinkComponent>;

export const SimpleLink: Story = {
  args: {
    external: false,
  },
};

export const ExternalLink: Story = {
  args: {
    external: true,
  },
};
