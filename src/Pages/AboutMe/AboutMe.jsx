import { FaArrowCircleRight, FaDownload } from "react-icons/fa";
import my_pic from "../../assets/bushra.png";
import { Link } from "react-router";

const AboutMe = () => {
  return (
    <div className="flex bg-black justify-center items-center min-h-screen lg:p-20 p-10">
      <div>
        <h2
          className="text-4xl lg:text-5xl font-extrabold text-center
          tracking-wide
          bg-linear-to-r from-primary to-[#B4E50D]
          bg-clip-text text-transparent pb-10"
        >
          About Me
        </h2>

        <div className="py-10 flex flex-col lg:flex-row justify-evenly items-center lg:gap-20 gap-6">
          
          {/* left */}
          <div>
            <h3 className="text-2xl font-bold font-primary">Hi there 👋</h3>

            <p className="py-4 lg:max-w-[500px]">
              I am a Frontend Developer specializing in React, with a strong focus
              on building responsive and user-friendly web applications. I have
              experience developing real-world projects like Ecobin and
              Parcelio, where I worked on clean UI implementation, smooth user
              flows, and reliable application structure.
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 pt-4">
              
              {/* Download CV */}
              <a
                href="/Humayra_Anjum_Bushra_CV.pdf"
                download
                className="px-6 py-3 rounded-full font-semibold text-black
                bg-linear-to-r from-primary to-[#B4E50D]
                hover:scale-105 transition-transform duration-300"
              >
                <FaDownload className="inline text-xl mr-2"/>Download CV
              </a>

              {/* My Projects */}
              <Link
                to="/myProjects"
                className="px-6 py-3 rounded-full font-semibold
                border-2 border-primary text-primary
                hover:bg-primary hover:text-black
                transition duration-300 shadow-2xl shadow-primary"
              >
                <FaArrowCircleRight className="inline text-2xl mr-2"/>My Projects
              </Link>
            </div>
          </div>

          {/* right */}
          <div className=" shadow-2xl shadow-primary rounded-2xl">
            <img
              className="lg:h-[300px] rounded-2xl"
              src={my_pic}
              alt="Humayra Anjum Bushra"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
