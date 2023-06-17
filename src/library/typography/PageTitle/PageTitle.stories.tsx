import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle as PageTitleComponent } from "./PageTitle";

const meta: Meta<typeof PageTitleComponent> = {
  component: PageTitleComponent,
};
export default meta;

type Story = StoryObj<typeof PageTitleComponent>;

export const PageTitle: Story = {};
