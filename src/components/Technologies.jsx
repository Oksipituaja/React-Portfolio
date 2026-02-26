import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { motion } from "motion/react";
import { FaLaravel } from "react-icons/fa6";
import { PiFigmaLogo } from "react-icons/pi";
import { SiAdobeillustrator } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -200 },
    animate: {
        y: [50, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24 " id="technologies">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap justify-center gap-12">
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiAdobeillustrator className="text-7xl text-amber-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJs className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaLaravel className="text-7xl text-red-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-teal-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <a href="">
                    <PiFigmaLogo className="text-7xl text-slate-50" />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies