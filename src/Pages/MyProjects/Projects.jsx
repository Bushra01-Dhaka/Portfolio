import { Link } from "react-router";
import ecobin from "../../assets/ecobin.png";
import parcelio from "../../assets/parcelio.png";
import recloset from "../../assets/recloset.png";

const Projects = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black lg:p-20 pt-20 p-10">
      <div>
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="text-center"
        >
          <p>Explore Projects</p>
          <h3 className="text-3xl lg:text-5xl font-bold text-white w-[250px] lg:w-auto mx-auto">
            Explore My Recent{" "}
            <span
              className="tracking-wide
            bg-linear-to-r from-primary to-[#B4E50D]
            bg-clip-text text-transparent"
            >
              Projects
            </span>
          </h3>
        </div>

        <div className="py-20 flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* left */}
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="relative w-[350px] lg:w-full lg:max-w-[600px]  shadow-lg  shadow-primary rounded-xl"
          >
            <img className="rounded-xl" src={parcelio} alt="" />
          </div>
          {/* right */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-center lg:text-justify"
          >
            <h2 className="text-2xl font-bold">Parcelio</h2>
            <p className="py-4 w-[300px] lg:w-full mx-auto lg:max-w-[600px]">
              A parcel delivery application enabling booking, real-time
              tracking, and role-based management (user, rider and admin) for
              efficient delivery workflows.
            </p>
            <h3 className="text-xl font-bold">Technology Used</h3>
            <div className="flex justify-center lg:justify-start flex-wrap w-[500px] lg:p-0 lg:py-8  p-20 items-center py-6 gap-2">
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                React
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Node Js
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Express Js
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Mongodb
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Html
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                CSS3
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Tailwind Css
              </p>
            </div>

            <div className="flex justify-center lg:justify-start items-center gap-4">
              <Link target="_blank" to="https://parcelio-257c8.web.app/">
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Live Demo
                </p>
              </Link>
              <Link
                target="_blank"
                to="https://github.com/Bushra01-Dhaka/Parcelio-Client-Site"
              >
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Frontend
                </p>
              </Link>
              <Link
                target="_blank"
                to="https://github.com/Bushra01-Dhaka/Parcelio-Server_Site"
              >
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Backend
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-20 flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* left */}
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="w-[350px] lg:w-full lg:max-w-[600px] shadow-lg shadow-primary rounded-xl"
          >
            <img className="rounded-xl" src={recloset} alt="ReCloset Project" />
          </div>

          {/* right */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-center lg:text-start"
          >
            <h2 className="text-2xl font-bold">ReCloset</h2>

            <p className="py-4 w-[300px] mx-auto lg:w-full lg:max-w-[600px]">
              ReCloset is a clothing donation and reuse platform that connects
              donors with people in need. Users can donate clothes, track
              donation history, and make secure payments, while admins manage
              users, donations, and collections through a role-based dashboard.
            </p>

            <h3 className="text-xl font-bold">Technology Used</h3>

            <div className="flex flex-wrap justify-center lg:justify-start w-[500px] lg:py-8 lg:p-0 p-20 items-center py-6 gap-2">
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                React
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Node Js
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Express Js
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                MongoDB
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Firebase
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Tailwind CSS
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                TanStack Query
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Stripe
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link
                target="_blank"
                to="https://recloset-2f002.web.app/"
              >
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Live Demo
                </p>
              </Link>

              <Link
                to="https://github.com/Bushra01-Dhaka/ReCloset"
                target="_blank"
              >
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Frontend
                </p>
              </Link>

              <Link
                to="https://github.com/Bushra01-Dhaka/recloset-server"
                target="_blank"
              >
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Backend
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-20 flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* left */}
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="w-[350px] lg:w-full lg:max-w-[600px]  shadow-lg shadow-primary rounded-xl"
          >
            <img className="rounded-xl" src={ecobin} alt="" />
          </div>
          {/* right */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-center lg:text-start"
          >
            <h2 className="text-2xl font-bold">Ecobin</h2>
            <p className="py-4 w-[300px] mx-auto lg:w-full lg:max-w-[600px]">
              A waste management platform that streamlines pickup requests,
              tracking, and admin & moderators operations through a clean and
              user-friendly interface.
            </p>
            <h3 className="text-xl font-bold">Technology Used</h3>
            <div className="flex flex-wrap justify-center lg:justify-start  w-[500px] lg:py-8 lg:p-0 p-20  items-center py-6 gap-2">
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                React
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Node Js
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Express Js
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Mongodb
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Html
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                CSS3
              </p>
              <p className="p-4 shadow-lg shadow-primary rounded-2xl mb-4">
                Tailwind Css
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link target="_blank" to="https://ecobin-ac0f8.web.app/">
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Live Demo
                </p>
              </Link>
              <Link
                to="https://github.com/Bushra01-Dhaka/Ecobin"
                target="_blank"
              >
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Frontend
                </p>
              </Link>
              <Link
                to="https://github.com/Bushra01-Dhaka/Ecobin-Server"
                target="_blank"
              >
                <p className="text-primary text-lg font-semibold border-r-2 border-r-primary pr-2">
                  Backend
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
