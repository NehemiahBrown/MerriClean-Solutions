import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import OurWork from "./components/OurWork.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Services />
        <OurWork />
        <About />
        <Contact />
      </main>

      <Footer/>
      
    </>
  );
}
