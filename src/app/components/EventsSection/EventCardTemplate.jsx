import React from 'react'
import Image from 'next/image'
const EventCardTemplate = () => {
   
    const EventNameTemplate = "Event Name"
  
    return (
    <div className='h-28 w-full  md:h-[50vh] md:w-28  relative flex flex-col justify-center items-center text-white overflow-hidden rounded-2xl'>
        <div className='relative w-full h-full p-4 flex-col flex items-center justify-center z-20 '>
            <h1 className=' absolute font-black text-3xl text-center rotate-0 md:-rotate-90 text-white z-20 uppercase'>
                {EventNameTemplate}
            </h1>
            <div className=' absolute w-full h-full bg-black opacity-50 z-10'>
                {/**BG DARK OVERLAY */}
            </div>
        </div>
        <div className='flex absolute w-full h-full z-10 overflow-hidden'>
            <Image
                src='/banners/clove.svg'
                alt="college" 
                fill
                className="hidden md:object-cover object-center
                " 
            />
            <Image
                src='/banners/h1.png'
                alt="college" 
                fill
                className="md:hidden object-cover object-center
                " 
            />
        </div>
    </div>
  )
}

export default EventCardTemplate