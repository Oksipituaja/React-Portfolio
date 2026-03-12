import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About me", href: "#hero" },
    { label: "Work", href: "#work" },
    { label: "Technologies", href: "#technologies" },
  ];

  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center relative z-20 gap-4 md:gap-0">
      <div className="w-full md:w-auto flex justify-between items-center">
        {/* Status Badge: masuk dari kiri */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm w-fit"
        >
          <div className="relative flex items-center justify-center w-3 h-3">
            {" "}
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-3 h-3 bg-[#10B981] rounded-full"
            />{" "}
            <div className="w-3 h-3 bg-[#10B981] rounded-full relative z-10" />{" "}
          </div>
          <span className="text-sm font-semibold text-[#1A1F2B]">
            Available for New Project
          </span>
        </motion.div>

        {/* Hamburger Button - hanya tampil di mobile */}
        <motion.button
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Navigation Links desktop */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 },
          },
        }}
        className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-800"
      >
        {navLinks.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            variants={{
              hidden: { y: -20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            whileHover={{ y: -2, color: "#06b6d4" }}
            transition={{ duration: 0.2 }}
            className="text-slate-100 hover:text-cyan-500 transition-colors"
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>

      {/* CTA Button desktop */}
      <motion.a
        href="#contact"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="flex items-center gap-2 bg-[#1A1F2B] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-lg shadow-black/10"
        >
          Let's Talk
          <ArrowUpRight size={18} />
        </motion.button>
      </motion.a>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full md:hidden flex flex-col items-center gap-4 pb-4 overflow-hidden"
          >
            {navLinks.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-slate-100 hover:text-cyan-500 transition-colors text-[15px] font-medium w-full text-center py-2 border-b border-white/10"
              >
                {item.label}
              </motion.a>
            ))}

            {/* CTA mobile */}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
              className="w-full"
            >
              <button className="w-full flex items-center justify-center gap-2 bg-[#1A1F2B] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-lg shadow-black/10">
                Let's Talk
                <ArrowUpRight size={18} />
              </button>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
