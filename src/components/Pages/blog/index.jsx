import React from 'react'
import NavBar from '../../NavBar/NavBar'
import CardForBlog from '../../CardForBlog/CardForBlog'
import postImg from '../../../assets/post.jpg'

const BlogIndex = () => {
  const navLinks = [{ name: 'Home', href: '/' }]

  const posts = [
    {
      title: 'React in the Wild',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sed! Nesciunt voluptatum cumque perspiciatis facere nobis eius consequatur.',
      date: 'October 10, 2023',
      img: postImg,
    },
    {
      title: 'Understanding Node.js',
      excerpt:
        'Quisquam iste possimus corrupti commodi omnis, maiores minus doloremque! Dolorum accusantium ad modi iusto inventore.',
      date: 'November 5, 2023',
      img: postImg,
    },
    {
      title: 'Styling with Tailwind',
      excerpt:
        'A minimal example post showing how to style components using utility classes with Tailwind CSS.',
      date: 'December 20, 2023',
      img: postImg,
    },
  ]

  return (
    <>
      <NavBar navLinks={navLinks} />
      <main className='min-h-screen bg-gray-100' id='home'>
        <section className='py-32 px-6 lg:px-20 flex flex-col lg:flex-row justify-between gap-10'>
          <aside className='lg:w-1/4'>
            <h2 className='text-2xl font-semibold mb-4'>Welcome to my personal blog</h2>
            <p className='text-gray-600 mb-4'>
              This is a blog page where you can find articles and posts about various topics. Always
              focused on code and development.
            </p>
            <p className='text-gray-600'>Posts published: <span className='font-bold'>{posts.length}</span></p>
          </aside>

          <article className='flex-1'>
            {posts.map((post, idx) => (
              <CardForBlog key={idx} title={post.title} excerpt={post.excerpt} date={post.date} img={post.img} />
            ))}
          </article>

          <aside className='lg:w-1/4'>
            <h2 className='text-2xl font-semibold mb-2'>About this blog</h2>
            <p className='text-gray-600'>Find articles about web development, backend technologies and more.</p>
          </aside>
        </section>
      </main>
    </>
  )
}

export default BlogIndex
