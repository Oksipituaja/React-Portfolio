import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaBehance, FaExternalLinkAlt, FaTimes, FaFigma } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import Assets
import RaffstoreUi from "../assets/Projects/Raffstore-E-Commerce.png";
import RedesignSteamDashboard from "../assets/Projects/Redesign-dashboard.png";
import CloudFinance from "../assets/Projects/Cloud-Finance.png";

const UIUXDesigner = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      title: "UI/UX Design for RaffStore Online Electronics Store",
      category: "E-Commerce Landing Page",
      description: "Project ini bertujuan meningkatkan engagement pengguna dan konversi melalui desain modern yang berpusat pada pengguna. Dikerjakan dengan Figma dengan fokus pada user flow yang optimal.",
      image: RaffstoreUi,
      liveUrl: "https://www.behance.net/gallery/224397111/UI-Design-E-Commerce-Landing-Page-RaffStore",
    },
    {
      title: "Redesigning the Steam Dashboard",
      category: "Desktop Application",
      description: "Redesign dashboard Steam dengan pendekatan Modern Dark UI. Fokus pada pengalaman pengguna yang sleek tanpa menghilangkan nuansa gaming yang ikonik.",
      image: RedesignSteamDashboard,
      liveUrl: "https://www.behance.net/gallery/221539787/Redesign-Steam-Dashboard",
    },
    {
      title: "CloudFinance: Modern Personal Finance Dashboard",
      category: "Fintech Dashboard",
      description: "Desain dashboard CloudFinance untuk menyederhanakan manajemen keuangan. Mengedepankan kejelasan visual melalui data visualization yang bersih.",
      image: CloudFinance,
      liveUrl: "https://www.behance.net/gallery/245459713/CloudFinance-Modern-Personal-Finance-Dashboard",
    },
  ];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950">
      {/* Background Gradient */}
      <div className="fixed top-0 -z-10 h-full w-full [background:radial-gradient(145%_145%_at_50%_10%,#000_55%,#083344_100%)]"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Navbar */}
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

        {/* Header */}
        <header className="max-w-3xl mb-16">
          <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
            <FaFigma className="text-lg" /> Portfolio
          </motion.h4>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            UI Designer Projects
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-gray-400">
            Koleksi karya UI/UX Designer terbaru yang saya buat. Klik gambar untuk melihat detail.
          </motion.p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
          {projects.map((project, i) => (
            <motion.div
              layoutId={`ui-card-${project.title}`}
              key={i}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-neutral-900/50 rounded-[2.5rem] border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <motion.img
                  layoutId={`ui-image-${project.title}`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-8">
                <span className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">Klik untuk eksplorasi desain.</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
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
                  layoutId={`ui-card-${selectedProject.title}`}
                  className="max-w-6xl w-full bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl pointer-events-auto"
                >
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Visual Section */}
                    <div className="lg:w-2/3 bg-black flex items-center justify-center p-4">
                      <motion.img
                        layoutId={`ui-image-${selectedProject.title}`}
                        src={selectedProject.image}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/3 p-10 md:p-14 relative flex flex-col justify-center">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-8 right-8 p-3 text-white/50 hover:text-white transition-colors"
                      >
                        <FaTimes size={24} />
                      </button>

                      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                        <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase mb-4 block">{selectedProject.category}</span>
                        <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                          {selectedProject.title}
                        </h2>
                        <div className="h-1.5 w-16 bg-cyan-500 rounded-full mb-8" />
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                          {selectedProject.description}
                        </p>
                        
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-black py-4 px-8 rounded-2xl transition-all hover:gap-6 shadow-lg shadow-cyan-500/20"
                        >
                          BEHANCE CASE STUDY <FaExternalLinkAlt />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Footer Navigation */}
        <div className="text-center pb-20">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 mx-auto text-gray-500 hover:text-cyan-400 transition-colors font-medium border border-gray-800 py-3 px-8 rounded-full"
          >
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Overview
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesigner;