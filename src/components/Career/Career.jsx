import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './Career.css' // Puedes agregar detalles finos ahí también

gsap.registerPlugin(ScrollTrigger)

const Career = () => {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  const hitRefs = [
    { year: '2020', text: 'Started my journey as a Junior Developer.' },
    { year: '2021', text: 'Created Adopta Hidalgo, a pet adoption platform that won 2nd place nationally.' },
    { year: '2021', text: 'Worked on high-impact web apps.' },
    { year: '2022', text: 'Took on full-stack architecture roles.' },
    { year: '2023', text: 'Mentored teams and improved performance.' },
  ]

  useGSAP(() => {
    if (!sectionRef.current || !lineRef.current) return

    gsap.set('.about-title', { opacity: 0, y: 50 })
    gsap.set('.about-paragraph', { opacity: 0, y: 50 })
    gsap.set('.hit', { opacity: 0, y: 50 })
    gsap.set(lineRef.current, { scaleY: 0, transformOrigin: 'top center' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=2000',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })

    tl.to('.about-title', { opacity: 1, y: 0, duration: 0.8 }, '<')
      .to('.about-paragraph', { opacity: 1, y: 0, duration: 0.8 }, '<')
      .to(lineRef.current, { scaleY: 1, duration: 1, ease: 'power2.out' }, '<')
      .to('.hit', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
      }, '<+0.2')
  })

  return (
    <main
     id='career'
      ref={sectionRef}
      className="min-h-[145vh]  md:min-h-[140vh] lg:min-h-[120vh]  h-screen flex flex-col justify-center items-center px-6 md:px-16 bg-white text-black"
    >
      <h2 className="about-title text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
        Career Timeline
      </h2>

      <p className="about-paragraph max-w-2xl text-lg text-gray-600 mb-12 text-center">
        A smooth journey through milestones and growth.
      </p>


      <div className="relative flex flex-col items-center">
        <div
          ref={lineRef}
          className="Career-line absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 rounded-full opacity-80"
        />

        <div className="flex flex-col gap-16 mt-8 ">
          {hitRefs.map((item, i) => (
            <div key={i} className="hit  relative flex flex-col items-center text-center">
              <div className="w-4 h-4 bg-white border-4 border-pink-500 rounded-full z-10 mb-4" />
              <div className="text-lg font-semibold text-gray-800">{item.year}</div>
              <p className="text-gray-600 max-w-xs">{item.text}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Career
