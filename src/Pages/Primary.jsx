import Hero from "../components/Hero";
// import About from "../components/About";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Technologies from "../components/Technologies";

const Primary = () => {
  return (
    // ✅ Hapus overflow-x-hidden dari sini
    <div className="text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* Background fixed */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
          [background:radial-gradient(145%_145%_at_50%_10%,#000_55%,#63e_100%)]"></div>
      </div>

      {/* Navbar sticky */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <Navbar />
      </div>

      {/* ✅ overflow-x-hidden dipindah ke sini */}
      <div className="overflow-x-hidden container mx-auto px-8">
        <Hero />
        {/* <About /> */}
        <Work />
        <Technologies />
        <Contact />
      </div>

    </div>
  )
}

export default Primary