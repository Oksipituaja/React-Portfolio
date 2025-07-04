import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <motion.div
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-shrink-0 items-center"
            >
                <div className="mx-2 text-xl font-bold text-sky-400 grayscale hover:grayscale-0 transition-all duration-500">Oksipituaja</div>
            </motion.div>
            <motion.div
                initial={{ x: 95, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="m-8 flex items-center justify-center gap-4 text-3xl"
            >
                <a className="transform hover:scale-150 transition-all duration-500" href="https://www.linkedin.com/in/yusuf-hammam">
                    <FaLinkedin />
                </a>
                <a className="transform hover:scale-150 transition-all duration-500" href="https://github.com/Oksipituaja">
                    <FaGithub />
                </a>
                <a className="transform hover:scale-150 transition-all duration-500" href="https://www.instagram.com/yusuf.hammam">
                    <FaInstagram />
                </a>
            </motion.div>
        </nav>
    );
};

export default Navbar;