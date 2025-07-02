import React from 'react'
import post from '../../assets/post.jpg'

const CardForBlog = () => {
  return (
    <>
        <main className='w-full bg-white rounded-2xl shadow-lg py-6 px-8 mb-10'>
            <article className='flex flex-row  justify-between  '>
            <section className='flex flex-col gap-2 w-1/2 '>
                <h2 className='text-xl font-semibold'>React in the Wild</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sed! Nesciunt voluptatum cumque perspiciatis facere nobis eius consequatur. Recusandae tempora perspiciatis minus quas? Culpa, inventore qui numquam veniam, natus ipsam impedit quia nisi fuga sit reprehenderit est suscipit officiis quasi doloremque perferendis labore aliquam. Quis quisquam iste possimus corrupti commodi omnis, maiores minus doloremque! Dolorum accusantium ad modi iusto inventore.</p>
                <section className='flex flex-row gap-2 items-center'>
                    <span className='text-gray-500'>Posted on: </span>
                    <span className='text-gray-700 font-semibold'>October 10, 2023</span>
                </section>
                <section className='h-full flex flex-col items-start justify-end '>
                        <button className='mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-2xl transition-all duration-500 ease-in-out p-2 hover:scale-105 pointer'>Read More</button>
                </section>
               
             </section>

             <section>
                <img src={post} alt="Blog Post Thumbnail"  className='w-96 h-auto object-cover rounded-lg'/>
             </section>
 
            </article>
        </main>
    </>
  )
}

export default CardForBlog