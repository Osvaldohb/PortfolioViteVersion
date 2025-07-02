import React, { useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import CardForBlog from '../../CardForBlog/CardForBlog';

const BlogIndex = () => {

  const [currentBlogsPosted, setCurrentBlogsPosted] = useState(10);

          const navLinks = [
        { name: 'Home', href: '#home' },
    ];




  return (
    <>
        <NavBar navLinks={navLinks}/>
        <main className=" h-screen bg-gray-100" id='home'>
          <section className='py-40 px-20 flex flex-row   justify-between'>
            <aside className='mb-10 max-w-96'>
              <h2 className='text-2xl font-semibold'>Welcome to my personal blog</h2>
              <hr  className='my-2 border-gray-300'/>
              <p className='text-gray-600'>This is a blog page where you can find articles and posts about various topics. Always focused on code and development.</p>
              <hr  className='my-2 border-gray-300'/>
              <p className='text-gray-600'>Post Published <span className='font-bold'>{currentBlogsPosted}</span></p>
              <hr  className='my-2 border-gray-300'/>
              <p className='text-gray-600'>Navigate to older posts</p>
              <button className='text-blue-500 hover:underline' onClick={() => setCurrentBlogsPosted(currentBlogsPosted + 5)}>Load More</button>

            </aside>
              <article className='w-full max-w-[60%] '>
                    <CardForBlog />
              </article>
          
            <aside className='mb-10 bg-amber-200'>
              <h2 className='text-2xl font-semibold'>Blog</h2>
              <p className='text-gray-600'>This is a blog page where you can find articles and posts.</p>

            </aside>
          </section>
           
        </main>
    </>
  )
}

export default BlogIndex