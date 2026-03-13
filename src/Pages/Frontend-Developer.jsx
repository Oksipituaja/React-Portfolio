import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaBehance } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import todoListAppPrev from "../assets/Projects/ToDoListApp-Prev.png";
import calculatorJsPrev from "../assets/Projects/Calculatorjs-prev.png";
import pawsAdvisorPrev from "../assets/Projects/PawsAdvisor-Prev.png";
import preview from "../assets/Projects/Preview.png";

const FrontendDeveloper = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

const projects = [
  {
    title: "To Do List App",
    description:
      "Aplikasi web untuk mengelola tugas harian dengan antarmuka yang intuitif dan user-friendly. Dibangun menggunakan React dan Tailwind CSS.",
    image: todoListAppPrev,
    liveUrl: "https://todolist-app-yusufhammam.vercel.app/",
  },
  {
    title: "Calculator App",
    description:
      "Sebuah proyek kalkulator web yang dibuat dengan HTML untuk struktur, CSS untuk styling minimalis, dan JavaScript untuk menangani operasi perhitungan.",
    image: calculatorJsPrev,
    liveUrl: "https://oksipituaja.github.io/Calculator-App-HTML-CSS-JS-/",
  },
  {
    title: "Paws Advisor Web",
    description:
      "Website statis responsif untuk informasi perawatan hewan peliharaan, dibangun dengan HTML, Tailwind CSS, dan JavaScript.",
    image: pawsAdvisorPrev,
    liveUrl: "https://oksipituaja.github.io/Paws-Advisor-Web/",
  },
  {
    title: "MI Terpadu Ibnu Sina",
    description: "Coming Soon",
    image: preview,
    liveUrl: "",
  },
  {
    title: "Website SD",
    description: "Coming Soon",
    image: preview,
    liveUrl: "",
  },
  {
    title: "Website Repaint",
    description: "Coming Soon",
    image: preview,
    liveUrl: "",
  },
];


  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 [background:radial-gradient(145%_145%_at_50%_10%,#000_55%,#22d3ee_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <nav className="mb-20 flex items-center justify-between py-6">
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center"
          >
            <div className="mx-2 text-xl font-bold text-sky-400 grayscale hover:grayscale-0 transition-all duration-500">Oksipituaja</div>
          </motion.div>
          <motion.div
            initial={{ x: 95, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 text-3xl"
          >
            <a href="https://www.behance.net/yusufhammam" target="_blank" rel="noopener noreferrer" className="hover:scale-150 transition-transform duration-500">
              <FaBehance />
            </a>
            <a href="https://github.com/Oksipituaja" target="_blank" rel="noopener noreferrer" className="hover:scale-150 transition-transform duration-500">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/yusuf.hammam" target="_blank" rel="noopener noreferrer" className="hover:scale-150 transition-transform duration-500">
              <FaInstagram />
            </a>
          </motion.div>
        </nav>

        <section className="pt-12 pb-20">
          <div className="max-w-xl mx-auto text-center mb-20">
            <h4 className="text-cyan-400 text-2xl font-semibold tracking-wider uppercase mb-2">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">FullStack Developer Projects</h2>
            <p className="text-lg text-gray-400">
              Koleksi karya FullStack Developer terbaru yang saya buat. Klik gambar untuk melihat detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -6, boxShadow: "0 0 30px rgba(34,211,238,0.15)" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer bg-gray-900 rounded-2xl border border-gray-700 flex flex-col overflow-hidden"
              >
                <div className="overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-60 flex items-center justify-center bg-gray-800 text-gray-500">
                      Tidak tersedia
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-white line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                  <span className="text-xs text-cyan-400 mt-1">Klik untuk detail</span>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full overflow-hidden relative"
                  initial={{ scale: 0.9, opacity: 0, y: 40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 40 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl z-10 leading-none"
                  >
                    X
                  </button>

                  {selectedProject.image && (
                    <div className="overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full max-h-100 object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    {selectedProject.liveUrl ? (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-6 rounded-xl transition duration-300 text-sm"
                      >
                        Lihat Project
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500 italic">Work in progress.</span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-2xl transition duration-300"
            >
              Kembali ke Beranda
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrontendDeveloper;