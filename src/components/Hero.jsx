import React from 'react';
import { ArrowUpRight, FileBadge, Instagram, Palette } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub } from 'react-icons/fa6';

const Hero = () => {
  const navigate = useNavigate();

  // Variasi animasi untuk Social Links (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 pb-12 md:pb-24 relative overflow-hidden" id='hero'>
      
      {/* 1. Judul Utama: Ukuran adaptif (Mobile: 5xl, Desktop: 110px) */}
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-5xl md:text-[110px] font-black tracking-tighter text-white leading-tight md:leading-none mt-10 mb-6 md:mb-10 relative z-20"
      >
        YUSUF HAMMAM
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-between pb-10 border-b border-neutral-800 relative mt-4 md:mt-16 gap-10 md:gap-0">
        
        {/* 2. Kolom Kiri: Info Card (Tampil urutan ke-2 di mobile) */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/3 relative z-20 flex justify-center md:justify-end md:pr-10 order-2 md:order-1"
        >
          <div className="p-0 md:p-8 rounded-[32px] max-w-[340px] text-center md:text-right">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#5688ff]">Siswa SMKN 1 Bangsri</h2>
            <p className="text-gray-400 text-sm md:text-[15px] mb-8 leading-relaxed">
              Seorang Pelajar SMKN 1 Bangsri yang memiliki minat terhadap UI Design, Graphic Design dan Web Developer
            </p>
            
            <div className="relative inline-block">
              {/* Efek Shadow Biru di belakang button */}
              <div className="absolute inset-0 bg-[#0095FF] rounded-xl translate-x-1.5 translate-y-1.5 z-0"></div>
              <a href="#contact">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 bg-[#1A1F2B] text-white px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all z-10 border border-[#1A1F2B]"
                >
                  Let's Collaborate
                  <ArrowUpRight size={18} />
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3. Kolom Tengah: Foto & Lingkaran Gradasi (Tampil urutan ke-1 di mobile) */}
        <div className="w-full lg:w-1/3 flex justify-center relative z-10 h-[350px] md:h-[500px] order-1 md:order-2">
          <div className="relative w-full h-full flex justify-center items-end">
            
            {/* Lingkaran Gradasi - Ukuran Responsive */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute 
                bottom-4 w-[250px] h-[250px] 
                md:bottom-8 md:w-[380px] md:h-[380px] 
                bg-gradient-to-b from-[#2598FF] to-[#6A52FF] 
                rounded-full z-0 
                [mask-image:linear-gradient(to_bottom,black_45%,transparent_90%)]"
            />
            
            {/* Foto Profil dengan Efek Floating & Brightness */}
            <motion.img 
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                y: { duration: 0.8, delay: 0.4 },
                opacity: { duration: 0.8, delay: 0.4 },
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut"
              }}
              src="src/assets/YusufProfile2.png" 
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

        {/* 4. Kolom Kanan: Social Links (Tampil urutan ke-3 di mobile) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/3 flex flex-wrap md:flex-col justify-center items-center md:items-start md:pl-16 gap-3 md:gap-4 relative z-20 order-3"
        >
          {[
            { icon: <FileBadge size={18} />, text: "About CV", link: "https://yusuf-hammam-portfolio.vercel.app/CV_YUSUF_HAMMAM.pdf" },
            { icon: <Instagram size={18} />, text: "Instagram", link: "https://www.instagram.com/yusuf.hammam" },
            { icon: <FaGithub size={18} />, text: "Github", link: "https://github.com/oksipituaja" },
            { icon: <Palette size={18} />, text: "Behance", link: "https://www.behance.net/yusufhammam" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={itemVariants}
              whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
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