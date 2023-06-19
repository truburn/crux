import type { Meta, StoryObj } from "@storybook/react";
import { Image as ImageComponent } from "@/elements/Image";

const meta: Meta<typeof ImageComponent> = {
  component: ImageComponent,
};
export default meta;

type Story = StoryObj<typeof ImageComponent>;

export const Image: Story = {};
