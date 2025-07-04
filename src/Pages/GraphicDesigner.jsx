import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
      title: "Bold, Modern, and Dynamic A Shoes Campaign Concept🔥",
      description:
        "Exploring a bold and modern design approach with dynamic elements and strong typography. This project showcases various poster designs and social media visuals. Expect to see vibrant colors and impactful layouts.",
      image: DynamicShoesCampaign,
      liveUrl:
        "https://www.behance.net/gallery/221772161/Bold-Modern-and-Dynamic-A-Shoes-Campaign-Concept",
    },
    {
      title:
        "Minimalism in Product Advertising: A Concept Poster for Aerostreet Hoops",
      description:
        "A personal exploration of minimalist design principles applied to product advertising, using the Aerostreet Hoops as a subject. This concept focuses on visual hierarchy and impactful simplicity, allowing the product to take center stage with minimal distractions.",
      image: AeroStreetHoops,
      liveUrl:
        "https://www.behance.net/gallery/223782617/Exploring-Visual-Hierarchy-Aerostreet-Hoops-Poster",
    },
    {
      title: "Designing Sound, Visually",
      description:
        "An exploration of visually representing sound through abstract layouts and dynamic compositions. This project experimented with different ways to translate auditory experiences into visual forms, focusing on rhythm and flow.",
      image: HeadphonesDesignGraphic,
      liveUrl:"https://www.behance.net/gallery/221946235/Designing-Sound-Visually-",
    },
    {
      title: "Crimson Elegance: Exploring the Beauty of an Apple",
      description:
        "Delving into the world of the apple, this series aims to highlight its natural perfection and the artistry found in its simple form. From the rich crimson hues to the subtle water droplets, every detail tells a story of nature's exquisite design.",
      image: AppleMinimalism,
      liveUrl:
        "https://www.behance.net/gallery/223797269/Crimson-Elegance-Exploring-the-Beauty-of-an-Apple",
    },
    {
      title: "pamphlet commemorating National Education Day",
      description:
        "Designing a pamphlet commemorating National Education Day, I focused on engaging visuals and easily digestible messages. This project showcases my ability to present complex information into educational and inspiring designs, while celebrating the spirit of education in Indonesia",
      image: NationalEducationDay,
      liveUrl:
        "",
    },
    {
      title: "pamphlet commemorating National Heroes",
      description:
        "Designing a pamphlet commemorating National Heroes' Day, I focused on meaningful visuals and uplifting messages. This project showcases my ability to present the values of heroism and the history of struggle through a design that honors, while simultaneously inspiring patriotism in Indonesia.",
      image: pamphletcommemoratingNationalHeroes,
      liveUrl:
        "",
    },
    {
      title: "Guest Reception ID Card Design PMR WIRA SANDYA ADHIMUKTI SMKN 1 Bangsri",
      description:
        "My portfolio features an Organizing Committee ID Card design, demonstrating my capability to craft professional and functional visual identities. This ID card was developed for quick recognition and to clearly convey the event/organization's brand, integrating robust branding with critical information in a concise format.",
      image: IDCARDPMRWIRA,
      liveUrl:
        "",
    },
  ];

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Gradasi */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 [background:radial-gradient(145%_145%_at_50%_10%,#000_55%,#22d3ee_100%)]"></div>
      </div>

      {/* Kontainer Utama */}
      <div className="container mx-auto px-8">
        {/* Navbar */}
        <nav className="mb-20 flex items-center justify-between py-6">
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center"
          >
            <div className="mx-2 text-xl font-bold text-sky-400 grayscale hover:grayscale-0 transition-all duration-500">
              Oksipituaja
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 95, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 text-3xl"
          >
            <a
              href="https://www.linkedin.com/in/yusuf-hammam-a1a0a21a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Oksipituaja"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/yusuf.hammam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-500"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </nav>

        {/* Portfolio Section */}
        <section className="pt-12 pb-20">
          <div className="max-w-xl mx-auto text-center mb-20">
            <h4 className="text-cyan-400 text-2xl font-semibold tracking-wider uppercase mb-2">
              Portfolio
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Graphic Design Projects
            </h2>
            <p className="text-lg text-gray-400">
              Koleksi karya desain grafis terbaru yang saya buat. Klik gambar untuk melihat detail.
            </p>
          </div>

          {/* Grid Project */}
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
                        className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-300"
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
                  <p className="text-sm text-gray-400 max-w-lg">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Popup fullscreen */}
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
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-5 right-6 text-red-600 text-5xl hover:text-red-500"
                  >
                    ×
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>


          {/* Tombol kembali */}
          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-2xl transition duration-300"
            >
              ← Kembali ke Beranda
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GraphicDesigner;
