import type { Meta, StoryObj } from "@storybook/react";
import { Loading as LoadingComponent } from "@/elements/Loading";

const meta: Meta<typeof LoadingComponent> = {
  component: LoadingComponent,
};
export default meta;

type Story = StoryObj<typeof LoadingComponent>;

export const Loading: Story = {};
