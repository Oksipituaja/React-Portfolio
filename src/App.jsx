import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Primary from "./Pages/Primary";
import UIUXDesigner from "./Pages/UIUXDesigner";
import FrontendDeveloper from "./Pages/Frontend-Developer";
import GraphicDesigner from "./Pages/GraphicDesigner";
import NotFound404 from "./Pages/NotFound404";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Primary />} />
        <Route path="/UI-UX-Designer" element={<UIUXDesigner />} />
        <Route path="/Frontend-Developer" element={<FrontendDeveloper />} />
        <Route path="/Graphic-Designer" element={<GraphicDesigner />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  )
}

export default App