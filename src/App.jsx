import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import Stack from "./Component/Stack";
import Projects from "./Component/Projects";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="relative max-w-[940px] mx-auto px-7">
      <NavBar />
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
