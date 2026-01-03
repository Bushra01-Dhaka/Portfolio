import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFire,
  FaArrowCircleRight,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVercel } from "react-icons/si";
import { Link } from "react-router";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: "90%" },
  { name: "CSS3", icon: <FaCss3Alt />, level: "85%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "85%" },
  { name: "JavaScript", icon: <FaJs />, level: "80%" },
  { name: "React", icon: <FaReact />, level: "80%" },
  { name: "Firebase", icon: <FaFire />, level: "70%" },
  { name: "Node.js", icon: <FaNodeJs />, level: "65%" },
  { name: "Express.js", icon: <SiExpress />, level: "65%" },
  { name: "MongoDB", icon: <SiMongodb />, level: "60%" },
  { name: "Vercel", icon: <SiVercel />, level: "70%" },
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black lg:py-40  lg:px-20 p-10">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left */}
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="lg:max-w-[40%]"
        >
          <p className="text-secondary">My Skills</p>

          <h3 className="text-3xl font-bold text-white">Let's Explore My</h3>

          <h2
            className="text-4xl lg:text-5xl font-extrabold tracking-wide
            bg-gradient-to-r from-primary to-[#B4E50D]
            bg-clip-text text-transparent pb-6"
          >
            Skills & Expertise
          </h2>

          <p className="text-gray-400">
            These are the technologies I use to build modern, scalable, and
            user-focused web applications.
          </p>

          <div className="my-10">
            <Link
              to="/myProjects"
              className="px-6 py-3 rounded-full font-semibold
                border-2 border-primary text-primary
                hover:bg-primary hover:text-black
                transition duration-300 shadow-2xl shadow-primary"
            >
              <FaArrowCircleRight className="inline text-2xl mr-2" />
              Explore Projects
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="flex flex-col cursor-pointer items-center justify-center gap-3
              p-6 rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-lg shadow-primary/40
              hover:scale-105 transition duration-300"
            >
              {/* Icon */}
              <div className="text-4xl text-primary">{skill.icon}</div>

              {/* Name */}
              <h4 className="text-white font-semibold">{skill.name}</h4>

              {/* Percentage Button */}
              <button
                className="px-4 py-1 text-sm rounded-full
                border border-primary text-primary
                hover:bg-primary hover:text-black
                transition"
              >
                {skill.level}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
