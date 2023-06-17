import type { Meta, StoryObj } from "@storybook/react";
import { Home as HomeComponent } from "./Home";

const meta: Meta<typeof HomeComponent> = {
  component: HomeComponent,
};
export default meta;

type Story = StoryObj<typeof HomeComponent>;

export const Home: Story = {};
