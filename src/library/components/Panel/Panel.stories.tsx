import type { Meta, StoryObj } from "@storybook/react";
import { Panel as PanelComponent } from "./Panel";

const meta: Meta<typeof PanelComponent> = {
  component: PanelComponent,
};
export default meta;

type Story = StoryObj<typeof PanelComponent>;

export const Panel: Story = {};
