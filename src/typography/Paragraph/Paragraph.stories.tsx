import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph as ParagraphComponent } from "./Paragraph";

const meta: Meta<typeof ParagraphComponent> = {
  component: ParagraphComponent,
};
export default meta;

type Story = StoryObj<typeof ParagraphComponent>;

export const Paragraph: Story = {};
