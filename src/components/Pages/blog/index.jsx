import React from 'react'
import NavBar from '../../NavBar/NavBar'

const BlogIndex = () => {

          const navLinks = [
        { name: 'Home', href: '#home' },
    ];




  return (
    <>
        <NavBar navLinks={navLinks}/>
        <main className="flex justify-center items-center px-16 h-screen bg-white " id='home'>
            <h1 className='text-4xl font-bold'>Blog is Still Under Construction please check back later.</h1>
        </main>
    </>
  )
}

export default BlogIndex