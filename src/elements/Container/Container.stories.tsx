import type { Meta, StoryObj } from "@storybook/react";
import { Container as ContainerComponent } from "@/elements/Container";

const meta: Meta<typeof ContainerComponent> = {
  component: ContainerComponent,
};
export default meta;

type Story = StoryObj<typeof ContainerComponent>;

export const Container: Story = {};
