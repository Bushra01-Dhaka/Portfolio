import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router";

const roles = ["Frontend Developer", "React Developer", "MERN Developer"];

const Banner = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 120);
    }

    else if (!isDeleting && charIndex === currentRole.length) {
      // Pause after typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    }

    else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    }

    else if (isDeleting && charIndex === 0) {
      // Switch role cleanly
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setText("");
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/banner-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="flex justify-center items-center lg:p-20 p-10">
        <div className="text-center text-white">
          <p className="text-secondary">Hello, I'm</p>

          <h2 className="text-5xl lg:text-6xl font-bold  tracking-wide
          bg-linear-to-r from-primary to-[#B4E50D]
          bg-clip-text text-transparent">
            Humayra Anjum Bushra
          </h2>

          <p className="text-2xl py-4">
            I'm a{" "}
            <span className="text-primary font-semibold">
              {text}
            </span>
            <span className="animate-pulse">|</span>
          </p>

          <div className="py-6 flex justify-center gap-4">
            <Link to="https://github.com/Bushra01-Dhaka">
              <FaGithub className="text-3xl text-primary shadow-xl shadow-primary rounded-full hover:scale-105 transition duration-300" />
            </Link>

            <Link to="https://www.linkedin.com/in/humayra1/">
              <TiSocialLinkedinCircular className="text-5xl text-primary shadow-xl shadow-primary rounded-full hover:scale-105 transition duration-300" />
            </Link>

            <Link>
              <ImMail4 className="text-3xl text-primary shadow-xl shadow-primary rounded-full hover:scale-105 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
