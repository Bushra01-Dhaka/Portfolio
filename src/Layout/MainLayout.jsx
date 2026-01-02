import { Outlet } from "react-router"
import Navbar from "../Component/Navbar"

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout