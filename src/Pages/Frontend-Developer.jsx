import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import todoListAppPrev from '../assets/Projects/ToDoListApp-Prev.png';
import calculatorJsPrev from '../assets/Projects/Calculatorjs-prev.png';
import pawsAdvisorPrev from '../assets/Projects/PawsAdvisor-Prev.png';
import preview from '../assets/Projects/Preview.png';
// Data project
const projects = [
  {
    title: "To Do List App",
    description:
      "Aplikasi web untuk mengelola tugas harian dengan antarmuka yang intuitif dan user-friendly. Dibangun menggunakan React dan Tailwind CSS.",
    image: todoListAppPrev,
    href: "https://todolist-app-yusufhammam.vercel.app/"
  },
  {
    title: "Calculator App",
    description:
      "Sebuah proyek kalkulator web yang dibuat dengan HTML untuk struktur, CSS untuk styling minimalis, dan JavaScript untuk menangani operasi perhitungan.",
    image: calculatorJsPrev,
    href: "https://oksipituaja.github.io/Calculator-App-HTML-CSS-JS-/"
  },
  {
    title: "Paws Advisor Web",
    description: "Website statis responsif untuk informasi perawatan hewan peliharaan, dibangun dengan HTML, Tailwind CSS, dan JavaScript.",
    image: pawsAdvisorPrev,
    href: "https://oksipituaja.github.io/Paws-Advisor-Web/"
  },
  {
    title: "Akmal Funiture",
    description: "Coming Soon",
    image: preview,
    href: ""
  }
];

const FrontendDeveloper = () => {
  const navigate = useNavigate();

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
            <div className="mx-2 text-xl font-bold text-sky-400 grayscale hover:grayscale-0 transition-all duration-500">Oksipituaja</div>
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
              Project Terbaru
            </h2>
            <p className="text-lg text-gray-400">
              Kumpulan proyek terbaru yang saya kerjakan <br />
              dalam bidang Frontend Developer.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-[48%] lg:w-[30%] bg-gray-900 rounded-2xl shadow-md hover:shadow-cyan-500/20 transition-shadow duration-300 cursor-pointer"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </a>
            ))}
          </div>

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

export default FrontendDeveloper;

