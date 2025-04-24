import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UIUXDesigner = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const projects = [
    {
      title: "UI/UX Design for RaffStore Online Electronics Store",
      description: "Here's a look at the UI/UX design for the landing page of RaffStore, an online electronics store. This project aims to enhance user engagement and drive conversions through a clean, modern, and user-centered design, carefully considering the optimal user flow and effective presentation of product information. Made using Figma.",
      image: "/src/assets/Projects/Raffstore-UI.png",
      liveUrl: "https://www.behance.net/gallery/224308023/UI-Design-for-RaffStore-Online-Electronics-Store",
    },
    {
      title: "Redesigning the Steam Dashboard",
      description: "Just tried my hand at redesigning the Steam dashboard with a modern dark UI. Focused on a sleek, user-friendly experience while keeping the gaming vibe intact. Let me know what you think! ",
      image: "/src/assets/Projects/Redesign-Dashboard.png",
      liveUrl: "https://www.behance.net/gallery/221539787/Redesign-Steam-Dashboard",
    },

  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-xl mx-auto text-center mb-20">
        <h4 className="text-cyan-400 text-2xl font-semibold tracking-wider uppercase mb-2">
          Portfolio
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          UI Designer Projects
        </h2>
        <p className="text-lg text-gray-400">
          Koleksi karya Graphic Designer terbaru yang saya buat. Klik gambar untuk melihat detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-gray-900 rounded-2xl border border-gray-700 hover:shadow-cyan-500/20 transition-shadow flex flex-col"
          >
            <div className="overflow-hidden rounded-t-2xl relative">
              {project.image ? (
                <div className="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="w-full h-60 flex items-center justify-center bg-gray-800 text-gray-500">
                  Tidak tersedia
                </div>
              )}
            </div>
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 overflow-y-auto p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="max-w-5xl w-full mx-auto relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.image && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={selectedProject.liveUrl ? "cursor-pointer" : "cursor-default"}
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-xl border border-gray-700 mb-6"
                  />
                </a>
              )}
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 mb-6 text-sm md:text-base">
                  {selectedProject.description}
                </p>

                {selectedProject.videoUrl ? (
                  <div className="aspect-video border border-gray-700 rounded-xl overflow-hidden">
                    <iframe
                      src={selectedProject.videoUrl}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      title="Video Presentasi Project"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-500">
                    ❌ Video tidak tersedia
                  </div>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-cyan-400"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-16">
        <button
          onClick={() => navigate("/")}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-2xl transition duration-300"
        >
          ← Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default UIUXDesigner;