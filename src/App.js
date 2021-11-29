import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

export default function App() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Resume />
      </main>
    );
  }