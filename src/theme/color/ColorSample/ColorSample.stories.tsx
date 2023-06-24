import type { Meta, StoryObj } from "@storybook/react";
import { ColorSample as ColorSampleComponent } from "@/theme/color/ColorSample";

const meta: Meta<typeof ColorSampleComponent> = {
  component: ColorSampleComponent,
  title: "theme/Story Blocks/Color Sample",
};
export default meta;

type Story = StoryObj<typeof ColorSampleComponent>;

export const ColorSample: Story = {};
