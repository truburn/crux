import type { Meta, StoryObj } from "@storybook/react";
import { Header as HeaderComponent } from "@/template/Header";

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <div style={{ flex: 1, padding: "1rem" }}>
          <p>
            The <code>{`<Header />`}</code> element is above.
          </p>
          <p>Right above me.</p>
          <p>The one with the logo.</p>
          <p>I&apos;m just page content.</p>
        </div>
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {};
