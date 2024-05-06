// import Dashboard from "@Pages/dashboard/Index";
// import Root from "@Pages/Root";
// import Dashboard from "@Pages/dashboard/Index";
import Login from "@Pages/login/Index";
// import Root from "pages/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // children: [
    //   {
    //     index: true,
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "user",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "product",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "setting",
    //     element: <Dashboard />,
    //   },
    // ],
  },
]);

export default router;
