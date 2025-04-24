import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UiUxDesign from "../assets/Projects/UI-UX-Design.jpg";
import FrontendDev from "../assets/Projects/Frontend-Dev.jpeg";
import GraphicDesign from "../assets/Projects/GraphicDesign.jpeg";

const Work = () => {
  const navigate = useNavigate();

  return (
    <section className="section" id="work">
      <div className="border-b border-neutral-800 pb-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
              <div className="my-20 text-center text-4xl">
                <motion.h2
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -90 }}
                  transition={{ duration: 1 }}
                  className="h2 leading-tight"
                >
                  My Projects
                </motion.h2>
              </div>

              <div className="mx-auto grid grid-cols-1 md:grid-cols-3 md:max-w-6xl gap-x-6 gap-y-8">

                {/* CARD 1  UI/UX Design */}
                <motion.div
                  onClick={() => navigate("/UI-UX-Designer")}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -350 }}
                  transition={{ duration: 1.4 }}
                  className="cursor-pointer flex flex-wrap group max-w-xl relative overflow-hidden border-2 border-white/50 rounded-xl"
                >
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  <img className="w-full group-hover:scale-125 transition-all duration-500" src={UiUxDesign} alt="img" />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient ">UI/UX Design</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-2xl lg:text-3xl text-white">Web Design</span>
                  </div>
                </motion.div>

                {/* CARD 2 Frontend Developer */}
                <motion.div
                  onClick={() => navigate("/Frontend-Developer")}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -350 }}
                  transition={{ duration: 1.5 }}
                  className="cursor-pointer flex flex-wrap group relative overflow-hidden border-2 border-white/50 rounded-xl"
                >
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  <img className="w-full group-hover:scale-125 transition-all duration-500" src={FrontendDev} alt="img" />
                  <div className="absolute -bottom-full left-7 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient ">Frontend Developer</span>
                  </div>
                  <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-2xl lg:text-3xl text-white">Web Developer</span>
                  </div>
                </motion.div>

                {/* CARD 3 GraphicDesigner*/}
                <motion.div
                  onClick={() => navigate("/Graphic-Designer")}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -350 }}
                  transition={{ duration: 1.6 }}
                  className="cursor-pointer flex flex-wrap group relative overflow-hidden border-2 border-white/50 rounded-xl"
                >
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  <img className="w-full group-hover:scale-125 transition-all duration-500" src={GraphicDesign} alt="img" />
                  <div className="absolute -bottom-full left-7 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient ">GraphicDesigner</span>
                  </div>
                  <div className="absolute -bottom-full left-6 lg:left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-2xl lg:text-3xl text-white">Visual Identity</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
