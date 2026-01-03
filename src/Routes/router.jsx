import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Skills from "../Pages/Skills/Skills";
import MyProjects from "../Pages/MyProjects/MyProjects";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Contact from "../Pages/ContactMe/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            path:"/",
            Component:Home,
        },
        {
          path:"/aboutMe",
          Component:AboutMe,
        },
        {
          path:"/skills",
          Component:Skills
        },
        {
          path:"/myProjects",
          Component:MyProjects,
        },
        {
          path:"/contactMe",
          Component:Contact,
        }
    ]
  },
]);

export default router