import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard as DashboardComponent } from "@/pages/Dashboard";

const meta: Meta<typeof DashboardComponent> = {
  component: DashboardComponent,
};
export default meta;

type Story = StoryObj<typeof DashboardComponent>;

export const Dashboard: Story = {};
