import './App.css'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero/Hero";
import CardContainer from "./components/CardContainer/CardContainer";
import AboutMe from "./components/About/About";
import Career from "./components/Career/Career";

gsap.registerPlugin(ScrollTrigger);

function App() {


  return (
   <>
      <main className=" flex justify-center items-center px-16  h-screen bg-white hero">
        <Hero/>
      </main>

      <section className="py-20 px-6 text-center flex flex-col  xl:flex-row justify-center items-start gap-6">
        <CardContainer/>
      </section>

      <AboutMe/>

      <Career/>




    </>
  )
}

export default App
