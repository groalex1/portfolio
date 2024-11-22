import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Projects from "./components/Projects";
import Email from "./components/Email";
import React from 'react';

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-[url('/images/bgimg3.jpg')] bg-cover">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero/>
        <About />
        <Projects />
        <Email />
      </div>
    </main>

  )
}
