import type { Meta, StoryObj } from "@storybook/react";
import { ColorSample as ColorSampleComponent } from "@/theme/color/ColorSample";
import { ColorNames } from "@/theme/color";

const meta: Meta<typeof ColorSampleComponent> = {
  component: ColorSampleComponent,
  title: "theme/Story Blocks/Color Sample",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    colorList: {
      control: "multi-select",
      options: Object.values(ColorNames),
    },
  },
};
export default meta;

type Story = StoryObj<typeof ColorSampleComponent>;

export const PrimaryColor: Story = {
  args: {
    colorList: [ColorNames.PRIMARY],
  },
};

export const SecondaryColor: Story = {
  args: {
    colorList: [ColorNames.SECONDARY],
  },
};

export const BackgroundColor: Story = {
  args: {
    colorList: [ColorNames.BACKGROUND],
  },
};

export const TextColor: Story = {
  args: {
    colorList: [ColorNames.TEXT],
  },
};

export const ErrorColor: Story = {
  args: {
    colorList: [ColorNames.ERROR],
  },
};

export const WarningColor: Story = {
  args: {
    colorList: [ColorNames.WARNING],
  },
};

export const SuccessColor: Story = {
  args: {
    colorList: [ColorNames.SUCCESS],
  },
};

export const InfoColor: Story = {
  args: {
    colorList: [ColorNames.INFO],
  },
};
