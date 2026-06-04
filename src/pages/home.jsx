import React from "react";
import Hero from "../Component/Hero";
import Stack from "../Component/Stack";
import Projects from "../Component/Projects";
import About from "../Component/About";
import NavBar from "../Component/Navbar";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Stack />
      <Projects />
      <About />
    </div>
  );
};

export default Home;
