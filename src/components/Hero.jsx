import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/YusufProfile.png";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});
const Hero = () => {
    return (
        <div className="container mx-auto flex justify-center flex-wrap border-b border-neutral-900 pb-4 space-y-8 lg:mb-35">
            <div className="lg:w-1/2 justify-center flex mx-auto -py-2 sm:h-[480px] ">
                <motion.img
                    initial={{ x: 95, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    src={profilePic}
                    alt="profile"
                    className="rounded-lg"
                />
            </div>

            <div className="lg:w-1/2 px-10 flex flex-col mx-auto items-center ">
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-8 text-6xl font-extralight lg:-mt-3 tracking-tight lg:text-7xl "> Yusuf Hammam
                </motion.h1>
                <motion.h2
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    dragConstraints={{ left: -100, right: 100 }}
                    className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue- bg-clip-text text-4xl text-transparent"
                >
                    Saya Seorang <span></span>
                    <span>
                        <TypeAnimation
                            sequence={[
                                "UI/UX Designer",
                                1500,
                                "Frontend Developer",
                                1500,
                                "Graphic Designer",
                                1500,
                            ]}
                            speed={50}
                            className="text-blue-600 tracking-widest"
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </span>
                </motion.h2>
                <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tight"
                >
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
    );
};


export default Hero;
