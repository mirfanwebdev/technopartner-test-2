import { createBrowserRouter } from "react-router-dom";
import CombineRoute from "../hoc/CombineRoute";
import Rootpage from "../pages/rootpage";
import Homepage from "../pages/Homepage";
import Menupage from "../pages/Menupage";
import Loginpage from "../pages/Loginpage";

const routeList = [
  {
    path: "/",
    element: <Rootpage />,
    isProtected: true,
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "menu",
        element: <Menupage />,
      },
    ],
  },
  {
    path: "login",
    element: <Loginpage />,
    isProtected: false,
  },
];

export const routes = createBrowserRouter(CombineRoute(routeList));
