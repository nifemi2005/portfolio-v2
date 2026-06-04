import React from "react";
import Hero from "../Component/Hero";
import Stack from "../Component/Stack";
import Projects from "../Component/Projects";
import About from "../Component/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stack />
      <Projects />
      <About />
    </div>
  );
};

export default Home;
