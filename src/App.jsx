import './App.css'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero/Hero";
import CardContainer from "./components/CardContainer/CardContainer";
import AboutMe from "./components/About/About";
import Career from "./components/Career/Career";
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';

gsap.registerPlugin(ScrollTrigger);

function App() {

      const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Career', href: '#career' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '/blog' }
    ];


  return (
   <>
       <NavBar navLinks={navLinks}/>
      <main className=" flex justify-center items-center px-16  h-screen bg-white hero" id='home'>
        <Hero/>
      </main>

      <section className="py-20 px-6 text-center flex flex-col  xl:flex-row justify-center items-start gap-6"  id='about'>
        <CardContainer/>
      </section>

      <AboutMe/>

      <Career/>

      <Contact/>




    </>
  )
}

export default App
