import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
const Card = (props) => {
    let reviews = props.reviews;


    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7em] z-[10] mx-auto'>
                <img src={reviews.image} className='aspect-square rounded-full w-[140px] h-[140px] z-25' />
                <div className=' absolute aspect-square rounded-full w-[140px] h-[140px] z-25 bg-purple-500 top-[-10px] -z-10 -right-3'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl tracking-wider capitalize'>{reviews.name}</p>
                <p className='text-violet-300 uppercase text-sm' >{reviews.job}</p>

            </div>



            <div className='mx-auto mt-5 text-violet-400'>
                <FaQuoteLeft />
            </div>
            <div className='text-center mt-4 text-slate-400'>
                <p>{reviews.text}</p>
            </div>
            <div className='mx-auto mt-5 text-violet-400' >
                <FaQuoteRight />
            </div>

        </div >
    )
}

export default Card
