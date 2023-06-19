import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder as PlaceholderComponent } from "@/components/Placeholder";

const meta: Meta<typeof PlaceholderComponent> = {
  component: PlaceholderComponent,
};
export default meta;

type Story = StoryObj<typeof PlaceholderComponent>;

export const Placeholder: Story = {};
