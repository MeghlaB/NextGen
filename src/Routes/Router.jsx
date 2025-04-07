import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Services from "../Components/Services/Services";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
export default router