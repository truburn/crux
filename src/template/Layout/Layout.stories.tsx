import type { Meta, StoryObj } from "@storybook/react";
import { Layout as LayoutComponent } from "@/template/Layout";
import { Dashboard } from "@/pages/Dashboard";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";

const meta: Meta<typeof LayoutComponent> = {
  component: LayoutComponent,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof LayoutComponent>;

export const HomePageLayout: Story = {
  parameters: {
    reactRouter: {
      routePath: "/",
      outlet: <Home />,
    },
  },
};

export const DashboardPageLayout: Story = {
  parameters: {
    reactRouter: {
      routePath: "/dashboard",
      outlet: <Dashboard />,
    },
  },
};

export const LoginPageLayout: Story = {
  parameters: {
    reactRouter: {
      routePath: "/login",
      outlet: <Login />,
    },
  },
};
