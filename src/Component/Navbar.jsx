import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navItems = <>
  <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
    <NavLink
      to="/aboutMe"
      className={({ isActive }) =>
        isActive ? "text-primary font-semibold" : ""
      }
    >
      About Me
    </NavLink>
  </li>

   <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
    <NavLink
      to="/skills"
      className={({ isActive }) =>
        isActive ? "text-primary font-semibold" : ""
      }
    >
      Skills
    </NavLink>
  </li>

  <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
    <NavLink
      to="/myProjects"
      className={({ isActive }) =>
        isActive ? "text-primary font-semibold" : ""
      }
    >
      Projects
    </NavLink>
  </li>

  <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
    <NavLink
      to="/contactMe"
      className={({ isActive }) =>
        isActive ? "text-primary font-semibold" : ""
      }
    >
      Contact
    </NavLink>
  </li>
</>;

  return (
    <div className="navbar bg-transparent md:max-w-screen-2xl mx-auto lg:px-12 px-4 fixed z-99">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {navItems}
          </ul>
        </div>
          <Link><p className="text-lg lg:text-2xl text-primary font-bold">Bushra.</p></Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
