import NavBar from "./Component/Navbar";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <div className="relative max-w-[940px] mx-auto px-7">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
