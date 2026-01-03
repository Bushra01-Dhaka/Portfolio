import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-black
      lg:p-20 p-10"
    >
      <div
        className="w-full max-w-5xl
          bg-linear-to-r from-primary to-[#B4E50D]
        bg-white/10 backdrop-blur-lg
        rounded-2xl shadow-2xl
        p-8 lg:p-12"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-black/80">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black">
            Contact Me
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Info */}
          <div className="space-y-6 text-black">
            <h3 className="text-2xl font-bold">Let’s talk about your project</h3>
            <p className="text-black/80">
              Feel free to reach out if you want to collaborate, have a project
              idea, or just want to say hello. I’m always open to discussing new
              opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <span>humayra@example.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl" />
                <span>+880 **********</span>
              </div>

              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-xl" />
                <span>Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl p-6 shadow-xl">
            <form className="space-y-4">
              
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full h-32"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-full text-black font-semibold
                bg-linear-to-r from-primary to-[#B4E50D]
                hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactMe;
