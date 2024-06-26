import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@Pages/dashboard/Index";
import Login from "@Pages/login/Index";
import Root from "pages/Root";
import ProtectedRoute from "./ProtectedRoute";
import User from "@Pages/user";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "product",
        element: <Dashboard />,
      },
      {
        path: "setting",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
