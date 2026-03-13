import React from 'react';
import { ArrowUpRight, FileBadge, Instagram, Palette } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBehance, FaGithub } from 'react-icons/fa6';
import YusufProfile from "../assets/YusufProfile2.png";

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 pb-12 md:pb-24 relative overflow-hidden" id='hero'>
      
      {/* Judul */}
      <motion.h1 
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-5xl md:text-[110px] font-black tracking-tighter text-white leading-tight md:leading-none mt-10 mb-6 md:mb-10 relative z-20"
      >
        YUSUF HAMMAM
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-between pb-10 border-b border-neutral-800 relative mt-4 md:mt-16 gap-10 md:gap-0">
        
        {/* Kolom Kiri */}
        <motion.div 
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -120, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="w-full md:w-1/3 relative z-20 flex justify-center md:justify-end md:pr-10 order-2 md:order-1"
        >
          <div className="p-0 md:p-8 rounded-[32px] max-w-[340px] text-center md:text-right">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#5688ff]">Siswa SMKN 1 Bangsri</h2>
            <p className="text-gray-400 text-sm md:text-[15px] mb-8 leading-relaxed">
              Seorang Pelajar SMKN 1 Bangsri yang memiliki minat terhadap UI Design, Graphic Design dan Web Developer
            </p>
            
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#0095FF] rounded-xl translate-x-1.5 translate-y-1.5 z-0"></div>
              <a href="#contact">
                <motion.button 
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="relative flex items-center gap-2 bg-[#1A1F2B] text-white px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all z-10 border border-[#1A1F2B]"
                >
                  Let's Collaborate
                  <ArrowUpRight size={18} />
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Kolom Tengah */}
        <div className="w-full lg:w-1/3 flex justify-center relative z-10 h-[350px] md:h-[500px] order-1 md:order-2">
          <div className="relative w-full h-full flex justify-center items-end">
            
            {/* Lingkaran gradasi */}
            <motion.div 
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              initial={{ scale: 0, opacity: 0, rotate: -15 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute 
                bottom-4 w-[250px] h-[250px] 
                md:bottom-8 md:w-[380px] md:h-[380px] 
                bg-gradient-to-b from-[#2598FF] to-[#6A52FF] 
                rounded-full z-0 
                [mask-image:linear-gradient(to_bottom,black_45%,transparent_90%)]"
            />
            
            {/* Foto */}
            <motion.img 
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 120, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={YusufProfile} 
              alt="YusufProfile" 
              className="relative z-10 
                w-[280px] md:w-auto md:max-w-[500px] 
                translate-y-[-20px] md:translate-y-[-38px]
                brightness-90 backdrop-blur-10 
                [mask-image:linear-gradient(to_bottom,black_85%,transparent_98%)] 
                object-contain"
            />
          </div>
        </div>

        {/* Social Links */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/3 flex flex-wrap md:flex-col justify-center items-center md:items-start md:pl-16 gap-3 md:gap-4 relative z-20 order-3"
        >
          {[
            { icon: <FileBadge size={18} />, text: "About CV", link: "https://yusuf-hammam-portfolio.vercel.app/CV_YUSUF_HAMMAM.pdf" },
            { icon: <Instagram size={18} />, text: "Instagram", link: "https://www.instagram.com/yusuf.hammam" },
            { icon: <FaGithub size={18} />, text: "Github", link: "https://github.com/oksipituaja" },
            { icon: <FaBehance size={18} />, text: "Behance", link: "https://www.behance.net/yusufhammam" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={itemVariants}
              whileHover={{ 
                x: 14,
                backgroundColor: "rgba(255,255,255,0.12)",
                scale: 1.03,
                boxShadow: "0 0 20px rgba(86,136,255,0.2)"
              }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-4 border border-white/20 px-5 py-3 rounded-full min-w-[145px] md:w-[200px] transition-all text-slate-50 text-sm md:text-base"
            >
              {item.icon}
              <span className="font-bold text-slate-100">{item.text}</span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </main>
  );
};

export default Hero;