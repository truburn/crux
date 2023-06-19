import type { Meta, StoryObj } from "@storybook/react";
import { Container as ContainerComponent } from "@/elements/Container";

const meta: Meta<typeof ContainerComponent> = {
  component: ContainerComponent,
};
export default meta;

type Story = StoryObj<typeof ContainerComponent>;

export const AsDiv: Story = {
  args: {
    children: "Container Content in a <div> element",
    as: "div",
  },
};

export const AsSpan: Story = {
  args: {
    children: "Container Content in a <span> element",
    as: "span",
  },
};

export const AsSection: Story = {
  args: {
    children: "Container Content in a <section> element",
    as: "section",
  },
};
