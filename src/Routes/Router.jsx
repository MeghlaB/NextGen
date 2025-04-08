import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Services from "../Components/Services/Services";
import Home from "../Components/Home/Home";
import Webservices from "../Components/Webservices/Webservices";
import GraphicDesign from "../Components/GraphicDesign/GraphicDesign";
import Marketing from "../Components/Marketing/Marketing";

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
      {
        path:"/webservice",
        element:<Webservices/>
      },
      {
        path:'/graphic-design',
        element:<GraphicDesign/>
      },
      {
        path:'/marketing',
        element:<Marketing/>
      }
    ],
  },
]);
export default router