import type { Meta, StoryObj } from "@storybook/react";
import { Modal as ModalComponent } from "./Modal";

const meta: Meta<typeof ModalComponent> = {
  component: ModalComponent,
};
export default meta;

type Story = StoryObj<typeof ModalComponent>;

export const Modal: Story = {};
