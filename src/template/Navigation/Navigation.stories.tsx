import type { Meta, StoryObj } from "@storybook/react";
import { Navigation as NavigationComponent } from "@/template/Navigation";

const meta: Meta<typeof NavigationComponent> = {
  component: NavigationComponent,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
        }}
      >
        <Story />
        <div style={{ flex: 1, padding: "1rem" }}>
          <p>I&apos;m just page content.</p>
          <p>The navigation is on the left.</p>
        </div>
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof NavigationComponent>;

export const Navigation: Story = {};
