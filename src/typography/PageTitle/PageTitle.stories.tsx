import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle as PageTitleComponent } from "@/typography/PageTitle";

const meta: Meta<typeof PageTitleComponent> = {
  component: PageTitleComponent,
};
export default meta;

type Story = StoryObj<typeof PageTitleComponent>;

export const PageTitle: Story = {};
