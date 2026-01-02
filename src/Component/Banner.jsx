import { FaGitAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional, improves text visibility) */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Content */}
      <div className="flex justify-center items-center lg:p-20 p-10">
        <div className="text-center text-white">
          <p className="text-secondary">Hello, I'm</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-primary">
            Humayra Anjum Bushra
          </h2>
          <p className="text-2xl py-4">I'm a Frontend Developer</p>

          <div className="py-6 max-w-[500px] mx-auto flex justify-center items-center gap-4">
            <Link to="https://github.com/Bushra01-Dhaka"><FaGithub className="text-3xl rounded-[50px] bg-transparent text-primary shadow-xl shadow-primary"/></Link>
            <Link to="https://www.linkedin.com/in/humayra1/"><TiSocialLinkedinCircular className="text-5xl rounded-[50px] bg-transparent text-primary shadow-xl shadow-primary"></TiSocialLinkedinCircular></Link>
            <Link><ImMail4 className="text-3xl rounded-[50px] bg-transparent text-primary shadow-xl shadow-primary" /></Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
