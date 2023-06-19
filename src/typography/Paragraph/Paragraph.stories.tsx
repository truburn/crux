import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph as ParagraphComponent } from "@/typography/Paragraph";

const meta: Meta<typeof ParagraphComponent> = {
  component: ParagraphComponent,
};
export default meta;

type Story = StoryObj<typeof ParagraphComponent>;

export const Paragraph: Story = {};
