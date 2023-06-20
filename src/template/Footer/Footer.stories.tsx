import type { Meta, StoryObj } from "@storybook/react";
import { Footer as FooterComponent } from "@/template/Footer";

const meta: Meta<typeof FooterComponent> = {
  component: FooterComponent,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <>
        <div style={{ flex: 1, padding: "1rem" }}>
          <p>This is where the main content is displayed.</p>
          <p>Look down.</p>
          <p>
            The <code>{`<Footer />`}</code> element is down there.
          </p>
          <p>At the bottom of the preview window.</p>
        </div>
        <Story />
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {};
