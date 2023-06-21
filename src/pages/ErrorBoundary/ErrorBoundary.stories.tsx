import type { Meta, StoryObj } from "@storybook/react";
import { ErrorBoundary as ErrorBoundaryComponent } from "@/pages/ErrorBoundary";

const meta: Meta<typeof ErrorBoundaryComponent> = {
  component: ErrorBoundaryComponent,
};
export default meta;

type Story = StoryObj<typeof ErrorBoundaryComponent>;

export const ErrorBoundary: Story = {};
