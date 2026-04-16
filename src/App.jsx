import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy Load Pages
const Primary = lazy(() => import("./Pages/Primary"));
const UIUXDesigner = lazy(() => import("./Pages/UIUXDesigner"));
const FrontendDeveloper = lazy(() => import("./Pages/Frontend-Developer"));
const GraphicDesigner = lazy(() => import("./Pages/GraphicDesigner"));
const NotFound404 = lazy(() => import("./Pages/NotFound404"));

const App = () => {
  return (
    <Router>
      {/* Suspense menampilkan loading sementara saat pindah halaman */}
      <Suspense fallback={
  <div className="h-screen bg-neutral-950 flex flex-col items-center justify-center gap-4">
    {/* Logo dengan animasi pulse yang halus */}
    <div className="animate-pulse">
      <img src="/Logo.png" alt="Loading..." className="w-24 h-auto md:w-32" />
    </div>
    
    {/* Progress bar kecil di bawah logo (opsional, tapi keren) */}
    <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden">
      <div className="w-full h-full bg-cyan-500 origin-left animate-loading-bar"></div>
    </div>

    {/* Teks loading yang statis atau pulse tipis */}
    <span className="text-cyan-500/80 text-sm tracking-[0.3em] font-light uppercase">
      Loading
    </span>
  </div>
}>
        <Routes>
          <Route path="/" element={<Primary />} />
          <Route path="/UI-UX-Designer" element={<UIUXDesigner />} />
          <Route path="/FullStack-Developer" element={<FrontendDeveloper />} />
          <Route path="/Graphic-Designer" element={<GraphicDesigner />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;