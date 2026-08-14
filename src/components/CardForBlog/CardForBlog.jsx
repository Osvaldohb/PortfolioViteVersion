import React from 'react'
import defaultImg from '../../assets/post.jpg'

const CardForBlog = ({ title, excerpt, date, img = defaultImg }) => {
  return (
    <main className='w-full bg-white rounded-2xl shadow-lg py-6 px-8 mb-10'>
      <article className='flex flex-col md:flex-row justify-between gap-4'>
        <section className='flex flex-col gap-2 md:w-1/2'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <p className='text-gray-600'>{excerpt}</p>
          <section className='flex flex-row gap-2 items-center mt-2'>
            <span className='text-gray-500'>Posted on:</span>
            <span className='text-gray-700 font-semibold'>{date}</span>
          </section>
          <section className='h-full flex flex-col items-start justify-end mt-auto'>
            <button className='mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl transition-all duration-500 ease-in-out p-2 hover:scale-105 pointer'>
              Read More
            </button>
          </section>
        </section>

        {img && (
          <section className='flex-shrink-0'>
            <img
              src={img}
              alt='Blog Post Thumbnail'
              className='w-96 h-auto object-cover rounded-lg'
            />
          </section>
        )}
      </article>
    </main>
  )
}

export default CardForBlog