import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa"; // (Boleh aktifin kalau mau pakai icon download)

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap lg:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-xl shadow-lg" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col items-center lg:items-start justify-center"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg text-neutral-400 mt-[-1rem]">
              {ABOUT_TEXT}
            </p>
          </div>

          <div className="mt-4 space-x-4">
            <a
              href="https://yusuf-hammam-portfolio.vercel.app/CV_YUSUF_HAMMAM.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Download CV
            </a>
            
          </div>


        </motion.div>
      </div>
    </div>
  );
};

export default About;
