import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/template/Layout";
import { Dashboard } from "@/pages/Dashboard";
import { ErrorBoundary } from "@/pages/ErrorBoundary";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
