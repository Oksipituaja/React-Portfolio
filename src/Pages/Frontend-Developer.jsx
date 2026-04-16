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
import MitisJeparaWeb from "../assets/Projects/MitisJeparaWeb.png";
import Sdn1Sekuro from "../assets/Projects/Sdn1Sekuro.png";

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
      title: "Website MI Terpadu Ibnu Sina",
      tech: "Laravel • Filament PHP • Livewire • Tailwind CSS • MySQL",
      description: "Website profil sekolah MI Terpadu Ibnu Sina dengan admin panel. Fitur meliputi berita, galeri, agenda, prestasi, form Hubungi Kami (kirim ke Gmail), dan pendaftaran siswa baru via Google Form",
      image: MitisJeparaWeb,
      liveUrl: "https://www.mitisjepara.com",
    },
    {
      title: "Website SD Negeri 1 Sekuro",
      tech: "Laravel • Filament PHP • Livewire • Tailwind CSS • MySQL",
      description: "Website profil sekolah SD Negeri 1 Sekuro dengan admin panel. Fitur meliputi berita, galeri, agenda, prestasi, dan pendaftaran siswa baru via Google Form",
      image: Sdn1Sekuro,
      liveUrl: "https://sdn1sekuro.sch.id",
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
    <div className="min-h-screen overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950">
      {/* Background Gradient - Konsisten dengan Graphic Designer */}
      <div className="fixed top-0 -z-10 h-full w-full [background:radial-gradient(145%_145%_at_50%_10%,#000_55%,#083344_100%)]"></div>

      <div className="container px-6 mx-auto lg:px-12">
        {/* Navbar - Identik dengan brand Oksipituaja */}
        <nav className="flex items-center justify-between py-6 mb-24">
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
          <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-cyan-500">
            <FaCode className="text-lg" /> Portfolio
          </motion.h4>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            FullStack Developer Projects
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="max-w-2xl text-lg text-gray-400">
            Koleksi karya FullStack Developer terbaru yang saya buat. Klik gambar untuk melihat detail teknis dan demonstrasi aplikasi.
          </motion.p>
        </header>

        {/* Project Grid - Premium Card Design */}
        <div className="grid grid-cols-1 gap-10 pb-32 md:grid-cols-2 lg:grid-cols-3">
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
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <div className="mb-3 text-xs font-bold tracking-widest uppercase text-cyan-500">{project.tech}</div>
                <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">{project.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 line-clamp-2">{project.description}</p>
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
                  <div className="flex flex-col h-full lg:flex-row">
                    {/* Visual Section */}
                    <div className="lg:w-3/5 bg-black p-4 flex items-center justify-center min-h-[300px]">
                      <motion.img
                        layoutId={`dev-image-${selectedProject.title}`}
                        src={selectedProject.image}
                        className="object-contain w-full h-auto shadow-2xl rounded-2xl"
                      />
                    </div>

                    {/* Info Section */}
                    <div className="relative flex flex-col justify-center p-12 lg:w-2/5">
                      <button onClick={() => setSelectedProject(null)} className="absolute p-3 transition-colors top-8 right-8 text-white/30 hover:text-white">
                        <FaTimes size={24} />
                      </button>
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <span className="block mb-4 text-xs font-black tracking-widest uppercase text-cyan-500">Project Breakdown</span>
                        <h2 className="mb-6 text-4xl font-bold leading-tight text-white">{selectedProject.title}</h2>
                        <p className="mb-8 text-lg leading-relaxed text-gray-400">{selectedProject.description}</p>
                        
                        <div className="mb-10">
                          <h4 className="mb-2 text-sm font-bold tracking-wider text-white uppercase">Tech Stack</h4>
                          <div className="font-mono text-sm text-cyan-400">{selectedProject.tech}</div>
                        </div>

                        {selectedProject.liveUrl ? (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-10 py-4 font-black text-black transition-all bg-white shadow-xl rounded-2xl hover:bg-cyan-400 hover:scale-105"
                          >
                            OPEN APP <FaExternalLinkAlt />
                          </a>
                        ) : (
                          <div className="pl-4 italic text-gray-500 border-l-2 border-gray-700">Project under development.</div>
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
        <div className="pb-24 text-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-8 py-3 mx-auto font-medium text-gray-500 transition-colors border border-gray-800 rounded-full group hover:text-cyan-400 hover:border-cyan-500/50"
          >
            <span className="transition-transform group-hover:-translate-x-2">←</span> Back to Overview
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontendDeveloper;