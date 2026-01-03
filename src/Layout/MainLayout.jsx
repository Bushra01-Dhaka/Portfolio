import { Outlet, ScrollRestoration } from "react-router"
import Navbar from "../Component/Navbar"

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
         <ScrollRestoration />
    </div>
  )
}

export default MainLayout