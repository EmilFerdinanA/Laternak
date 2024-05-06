// import Dashboard from "@Pages/dashboard/Index";
// import Root from "@Pages/Root";
import Dashboard from "@Pages/dashboard/Index";
import Login from "@Pages/login/Index";
import Root from "pages/Root";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
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
        element: <Dashboard />,
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
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
