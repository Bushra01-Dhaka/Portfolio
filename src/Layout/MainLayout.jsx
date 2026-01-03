import { Outlet, ScrollRestoration } from "react-router"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
         <ScrollRestoration />
    </div>
  )
}

export default MainLayout