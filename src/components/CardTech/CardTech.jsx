import React from 'react'
// arriba del componente
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' });



const CardTech = ({imgId,Name,Description}) => {
  return (
    <>
        <main className='min-w-0.5 flex flex-col cardMain  md:flex-row items-center justify-between  py-20 px-20 bg-white max-w-2xl border-transparent shadow-2xl rounded-2xl ' >

                        <img src={images[`/src/assets/${imgId}.png`]}  alt='imgLogo' className='h-24'/>
            <div>
                <div className="flex-col items-start gap-4">
                    <span className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">{Name}</span>
                    <p className="text-xsm sm:text-sm md:text-base text-gray-600 max-w-md px-1">
                       {Description}
                    </p>
                </div>
            </div>
        </main>

    </>
  )
}

export default CardTech