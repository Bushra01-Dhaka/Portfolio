import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/ContactMe/Contact";
import Projects from "../Pages/MyProjects/Projects";

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
          Component:Projects,
        },
        {
          path:"/contactMe",
          Component:Contact,
        }
    ]
  },
]);

export default router