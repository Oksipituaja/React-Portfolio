import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Technologies from "../components/Technologies";
const Primary = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300
    selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
      [background:radial-gradient(145%_145%_at_50%_10%,#000_55%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Technologies />
        <Contact />
      </div>
    </div>
  )
}

export default Primary