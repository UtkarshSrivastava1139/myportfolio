"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import LinkedInFeed from "@/components/LinkedInFeed";
import Contact from "@/components/Contact";
// import Blog from "@/components/Blog"; // Hidden for now
// import Footer from "@/components/Footer"; // Merged with Contact

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-x-hidden"
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <LinkedInFeed />
      <Contact />
      {/* <Blog /> */}
      {/* <Footer /> - Now merged with Contact */}
    </motion.div>
  );
}
