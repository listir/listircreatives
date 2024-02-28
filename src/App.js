import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Whychooseme from"./components/Whychooseme";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Tools/>
      <Whychooseme/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
