import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { Link } from "react-router";
import logo from "../assets/littleStar.svg"

const Footer = () => {
  return (
    <div className="flex justify-center item-center mx-auto px-10 lg:px-20 bg-black">
      <footer className="footer  sm:footer-horizontal text-center bg-black text-neutral-content lg:p-10">
        <Link to="/"  className="flex justify-center items-center">
            <img className="w-[30px] h-[30px] bg-conic rounded-[50px] bg-primary  animate-spin [animation-duration:6s] [animation-timing-function:linear]" src={logo} alt="" />
            <h2 className="text-lg ml-[-10px] lg:text-2xl font-bold  tracking-wide
          bg-linear-to-r from-primary to-[#B4E50D]
          bg-clip-text text-transparent">Bushra.</h2>
        </Link>
        <nav>
           <h6 className="footer-title">Explore</h6>
          <Link to="/aboutMe" className="link link-hover">About Me</Link>
          <Link to="/skills" className="link link-hover">My Skills</Link>
          <Link to="/myProjects" className="link link-hover">My Projects</Link>
          <Link to="/contactMe" className="link link-hover">Contact Now</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <Link
            to="https://github.com/Bushra01-Dhaka"
            className="link link-hover"
          >
            <FaGithub className="inline text-2xl pr-2 text-primary"></FaGithub> Github
          </Link>
          <Link className="link link-hover">
            <FaLinkedin className="inline pr-2 text-primary text-2xl"></FaLinkedin> Linkedin
          </Link>
          <Link className="link link-hover">
            <ImMail4 className="inline pr-2 text-primary text-3xl"></ImMail4>
            humayraanjum87@gmail.com
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
