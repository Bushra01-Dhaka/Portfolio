import { useState } from "react";
import { GoMail } from "react-icons/go";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleMail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=humayraanjum87@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank"); // open Gmail compose in new tab

    // Clear fields after sending
    setSubject("");
    setBody("");
  };
  return (
    <div className="relative flex justify-center items-center min-h-screen lg:p-20 p-10 bg-linear-to-r from-black to-[#B4E50D]">
      <div
        data-aos="zoom-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="p-20 bg-black rounded-2xl shadow-lg shadow-primary"
      >
        <p className="text-center">Get In Touch</p>
        <h2
          className="text-4xl lg:text-5xl font-extrabold text-center
          pb-10"
        >
          Let's Talk About{" "}
          <span
            className=" tracking-wide
          bg-linear-to-r from-primary to-[#B4E50D]
          bg-clip-text text-transparent"
          >
            Next Projects
          </span>
        </h2>
        <p className="py-2 lg:w-[500px] mx-auto text-center">
          {" "}
          Feel free to reach out if you want to collaborate, have a project
          idea, or just want to say hello. I’m always open to discussing new
          opportunities.
        </p>

        {/* form */}
        <div className="pt-10">
          <div className="flex flex-col gap-4 p-4 border-0  w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border-0 border-b text-white p-2  focus:outline-none focus:ring-2 focus:ring-white"
            />

            <textarea
              placeholder="Enter your message"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="border-0 border-b p-2 text-white  h-28 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              onClick={handleMail}
              className="btn btn-md  text-lg  bg-linear-to-r hover:bg-linear-to-l from-primary to-[#B4E50D] text-black cursor-pointer flex items-center justify-center gap-2 rounded-2xl mt-4"
            >
              <GoMail className="text-2xl" /> Send Email
            </button>
          </div>
        </div>
      </div>



    {/* tilt form wave */}
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>



    </div>
  );
};

export default Contact;
