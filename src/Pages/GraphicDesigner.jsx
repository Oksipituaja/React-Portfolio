import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaBehance, FaExternalLinkAlt, FaTimes, FaPalette } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import Assets
import AeroStreetHoops from "../assets/Projects/Aerostreet-Hoops.png";
import DynamicShoesCampaign from "../assets/Projects/Shoes-Design-Graphic.png";
import HeadphonesDesignGraphic from "../assets/Projects/Headphones-Design-Graphic.png";
import AppleMinimalism from "../assets/Projects/Sosial-Media-Apple.png";
import IDCARDPMRWIRA from "../assets/Projects/ID-CARD.jpg";
import pamphletcommemoratingNationalHeroes from "../assets/Projects/FLYER-HARI-PAHLAWAN.jpg";
import NationalEducationDay from "../assets/Projects/Pendidikan-Nasional.png";

const GraphicDesigner = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      title: "Bold, Modern, and Dynamic A Shoes Campaign Concept",
      category: "Ad Campaign",
      description: "Eksplorasi desain berani dengan tipografi kuat dan elemen dinamis. Menampilkan pendekatan visual yang vibrant untuk kampanye media sosial modern.",
      image: DynamicShoesCampaign,
      liveUrl: "https://www.behance.net/gallery/221772161/Bold-Modern-and-Dynamic-A-Shoes-Campaign-Concept",
    },
    {
      title: "Minimalism: Aerostreet Hoops Concept Poster",
      category: "Poster Design",
      description: "Penerapan prinsip minimalisme dalam periklanan produk. Fokus pada hierarki visual dan kesederhanaan yang berdampak kuat pada subjek utama.",
      image: AeroStreetHoops,
      liveUrl: "https://www.behance.net/gallery/223782617/Exploring-Visual-Hierarchy-Aerostreet-Hoops-Poster",
    },
    {
      title: "Designing Sound, Visually",
      category: "Abstract Concept",
      description: "Representasi visual dari suara melalui tata letak abstrak dan komposisi dinamis. Eksperimen menerjemahkan pengalaman auditori ke dalam bentuk visual.",
      image: HeadphonesDesignGraphic,
      liveUrl: "https://www.behance.net/gallery/221946235/Designing-Sound-Visually-",
    },
    {
      title: "Crimson Elegance: Apple Minimalism",
      category: "Product Study",
      description: "Menonjolkan kesempurnaan alami melalui bentuk yang sederhana. Eksplorasi keindahan objek sehari-hari dengan sentuhan elegan.",
      image: AppleMinimalism,
      liveUrl: "https://www.behance.net/gallery/223797269/Crimson-Elegance-Exploring-the-Beauty-of-an-Apple",
    },
    {
      title: "Pamphlet Commemorating National Education Day",
      category: "Public Information",
      description: "Pamflet edukatif untuk Hari Pendidikan Nasional dengan pesan yang mudah dicerna dan visual yang menarik perhatian.",
      image: NationalEducationDay,
      liveUrl: "",
    },
    {
      title: "Pamphlet Commemorating National Heroes",
      category: "Event Flyer",
      description: "Desain peringatan Hari Pahlawan yang berfokus pada pesan inspiratif dan visual yang bermakna mendalam.",
      image: pamphletcommemoratingNationalHeroes,
      liveUrl: "",
    },
    {
      title: "Guest Reception ID Card - PMR WIRA",
      category: "Visual Identity",
      description: "Desain identitas fungsional untuk organisasi sekolah, menunjukkan kemampuan dalam menciptakan aset visual profesional yang praktis.",
      image: IDCARDPMRWIRA,
      liveUrl: "",
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
      {/* Background Gradient - Konsisten dengan halaman lain */}
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
            <div className="mx-2 text-2xl font-bold text-[#FAFAFA] transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-105">
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
            <FaPalette className="text-lg" /> Portfolio
          </motion.h4>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Graphic Design Projects
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-gray-400">
            Koleksi karya desain grafis terbaru yang saya buat. Klik gambar untuk melihat eksplorasi visual selengkapnya.
          </motion.p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
          {projects.map((project, i) => (
            <motion.div
              layoutId={`graphic-card-${project.title}`}
              key={i}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-neutral-900/40 rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <motion.img
                  layoutId={`graphic-image-${project.title}`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-cyan-500 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white leading-tight line-clamp-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
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
                  layoutId={`graphic-card-${selectedProject.title}`}
                  className="max-w-6xl w-full bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl pointer-events-auto"
                >
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Visual Section */}
                    <div className="lg:w-2/3 bg-black flex items-center justify-center p-4">
                      <motion.img
                        layoutId={`graphic-image-${selectedProject.title}`}
                        src={selectedProject.image}
                        className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                      />
                    </div>

                    {/* Info Section */}
                    <div className="lg:w-1/3 p-12 relative flex flex-col justify-center">
                      <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-3 text-white/30 hover:text-white transition-colors">
                        <FaTimes size={24} />
                      </button>

                      <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                        <span className="text-cyan-500 font-black tracking-widest text-xs uppercase mb-4 block">Design Specification</span>
                        <h2 className="text-3xl font-bold text-white mb-6 leading-tight">{selectedProject.title}</h2>
                        <div className="h-1.5 w-16 bg-cyan-500 rounded-full mb-8" />
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">{selectedProject.description}</p>
                        
                        {selectedProject.liveUrl ? (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-white text-black font-black py-4 px-10 rounded-2xl hover:bg-cyan-400 hover:scale-105 transition-all shadow-xl"
                          >
                            VIEW ON BEHANCE <FaExternalLinkAlt />
                          </a>
                        ) : (
                          <div className="text-gray-500 italic border-l-2 border-gray-700 pl-4">Aset internal / Offline project.</div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Back Button */}
        <div className="text-center pb-24">
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

export default GraphicDesigner;