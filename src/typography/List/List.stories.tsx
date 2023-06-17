import type { Meta, StoryObj } from "@storybook/react";
import { List as ListComponent } from "./List";

const meta: Meta<typeof ListComponent> = {
  component: ListComponent,
};
export default meta;

type Story = StoryObj<typeof ListComponent>;

export const List: Story = {};
