import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaBehance, FaExternalLinkAlt, FaTimes, FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import Assets
import todoListAppPrev from "../assets/Projects/ToDoListApp-Prev.png";
import calculatorJsPrev from "../assets/Projects/Calculatorjs-prev.png";
import pawsAdvisorPrev from "../assets/Projects/PawsAdvisor-Prev.png";
import preview from "../assets/Projects/Preview.png";
import MulyoAbadiWeb from "../assets/Projects/MulyoAbadiWorkpaintWeb.png";

const FrontendDeveloper = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      title: "To Do List App",
      tech: "React • Tailwind CSS",
      description: "Aplikasi web untuk mengelola tugas harian dengan antarmuka yang intuitif dan user-friendly. Fokus pada efisiensi penggunaan state management di React.",
      image: todoListAppPrev,
      liveUrl: "https://todolist-app-yusufhammam.vercel.app/",
    },
    {
      title: "Calculator App",
      tech: "HTML • CSS • JS",
      description: "Sebuah proyek kalkulator web yang dibuat dengan algoritma perhitungan JavaScript murni, dibalut dengan styling minimalis dan responsif.",
      image: calculatorJsPrev,
      liveUrl: "https://oksipituaja.github.io/Calculator-App-HTML-CSS-JS-/",
    },
    {
      title: "Paws Advisor Web",
      tech: "Tailwind • JS • Static",
      description: "Website statis responsif untuk informasi perawatan hewan peliharaan. Menampilkan implementasi layout grid dan flexbox yang kompleks.",
      image: pawsAdvisorPrev,
      liveUrl: "https://oksipituaja.github.io/Paws-Advisor-Web/",
    },
    {
      title: "MI Terpadu Ibnu Sina",
      tech: "Laravel • Fullstack",
      description: "Sistem informasi sekolah yang sedang dikembangkan menggunakan ekosistem Laravel untuk manajemen data pendidikan.",
      image: preview,
      liveUrl: "",
    },
    {
      title: "Website SD",
      tech: "React • Node.js",
      description: "Proyek pengembangan portal informasi sekolah dasar dengan fitur dinamis. (Work in Progress)",
      image: preview,
      liveUrl: "",
    },
    {
      title: "Mulyo Abadi WorkPaint Company Profile",
      tech: "React",
      description: "Konsep platform jasa repaint motor dengan sistem pemesanan online.",
      image: MulyoAbadiWeb,
      liveUrl: "https://www.mulyoabadiworkpaint.com/",
    },
  ];

  // Shortcut ESC untuk tutup modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950">
      {/* Background Gradient - Konsisten dengan Graphic Designer */}
      <div className="fixed top-0 -z-10 h-full w-full [background:radial-gradient(145%_145%_at_50%_10%,#000_55%,#083344_100%)]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Navbar - Identik dengan brand Oksipituaja */}
        <nav className="mb-24 flex items-center justify-between py-6">
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="mx-2 text-2xl font-bold text-[#FAFAFA] tracking-normal transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-105">
              Oksipituaja
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 95, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-6 text-3xl"
          >
            <a href="https://www.behance.net/yusufhammam" target="_blank" rel="noopener noreferrer" className="text-[#FAFAFA] hover:scale-150 hover:text-cyan-400 transition-all duration-500"><FaBehance /></a>
            <a href="https://github.com/Oksipituaja" target="_blank" rel="noopener noreferrer" className="text-[#FAFAFA] hover:scale-150 hover:text-white transition-all duration-500"><FaGithub /></a>
            <a href="https://www.instagram.com/yusuf.hammam" target="_blank" rel="noopener noreferrer" className="text-[#FAFAFA] hover:scale-150 hover:text-pink-500 transition-all duration-500"><FaInstagram /></a>
          </motion.div>
        </nav>

        {/* Header - Sesuai Request */}
        <header className="max-w-3xl mb-20 text-left">
          <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
            <FaCode className="text-lg" /> Portfolio
          </motion.h4>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            FullStack Developer Projects
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-gray-400 max-w-2xl">
            Koleksi karya FullStack Developer terbaru yang saya buat. Klik gambar untuk melihat detail teknis dan demonstrasi aplikasi.
          </motion.p>
        </header>

        {/* Project Grid - Premium Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
          {projects.map((project, i) => (
            <motion.div
              layoutId={`dev-card-${project.title}`}
              key={i}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-neutral-900/40 rounded-[2rem] border border-white/5 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  layoutId={`dev-image-${project.title}`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <div className="text-cyan-500 text-xs font-bold tracking-widest mb-3 uppercase">{project.tech}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail - Professional Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 z-[60] backdrop-blur-xl"
                onClick={() => setSelectedProject(null)}
              />
              <div className="fixed inset-0 z-[70] overflow-y-auto pt-10 pb-20 px-4 flex justify-center items-center pointer-events-none">
                <motion.div
                  layoutId={`dev-card-${selectedProject.title}`}
                  className="max-w-5xl w-full bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl pointer-events-auto"
                >
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Visual Section */}
                    <div className="lg:w-3/5 bg-black p-4 flex items-center justify-center min-h-[300px]">
                      <motion.img
                        layoutId={`dev-image-${selectedProject.title}`}
                        src={selectedProject.image}
                        className="w-full h-auto rounded-2xl shadow-2xl object-contain"
                      />
                    </div>

                    {/* Info Section */}
                    <div className="lg:w-2/5 p-12 relative flex flex-col justify-center">
                      <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-3 text-white/30 hover:text-white transition-colors">
                        <FaTimes size={24} />
                      </button>
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <span className="text-cyan-500 font-black tracking-widest text-xs uppercase mb-4 block">Project Breakdown</span>
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">{selectedProject.title}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">{selectedProject.description}</p>
                        
                        <div className="mb-10">
                          <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Tech Stack</h4>
                          <div className="text-cyan-400 font-mono text-sm">{selectedProject.tech}</div>
                        </div>

                        {selectedProject.liveUrl ? (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-white text-black font-black py-4 px-10 rounded-2xl hover:bg-cyan-400 hover:scale-105 transition-all shadow-xl"
                          >
                            OPEN APP <FaExternalLinkAlt />
                          </a>
                        ) : (
                          <div className="text-gray-500 italic border-l-2 border-gray-700 pl-4">Project under development.</div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Footer Back Button */}
        <div className="text-center pb-24">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 mx-auto text-gray-500 hover:text-cyan-400 transition-colors font-medium border border-gray-800 py-3 px-8 rounded-full hover:border-cyan-500/50"
          >
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Overview
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontendDeveloper;