import type { Meta, StoryObj } from "@storybook/react";
import { Heading as HeadingComponent } from "@/typography/Heading";

const meta: Meta<typeof HeadingComponent> = {
  component: HeadingComponent,
};
export default meta;

type Story = StoryObj<typeof HeadingComponent>;

export const Heading: Story = {};
