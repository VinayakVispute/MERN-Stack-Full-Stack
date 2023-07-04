import React, { useState } from 'react'
import Card from './Card'
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs'


const Testimonial = ({ reviews }) => {
    const [individualReviews, setIndividualReviews] = useState(0)

    function nextClickHandler() {
        setIndividualReviews((individualReviews + 1) % (reviews.length));
    }
    function previousClickHandler() {
        setIndividualReviews((individualReviews - 1 + reviews.length) % (reviews.length));
    }

    function supriseClickHandler() {
        setIndividualReviews(Math.floor(Math.random() * reviews.length));
    }

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center transition-all duration-700 p-10 mt-10 hover:shadow-xl rounded-md' >
            <Card reviews={reviews[individualReviews]} />
            <div className='flex text-3xl mt-7 gap-3 text-violet-400 font-bold justify-center items-center'>
                <button onClick={previousClickHandler} className='cursor-pointer 
                hover:text-violet-500'>
                    <BsChevronBarLeft />
                </button>
                <button onClick={nextClickHandler} className='cursor-pointer
                hover:text-violet-500'>
                    <BsChevronBarRight />
                </button>
            </div>
            <div >
                <button onClick={supriseClickHandler} className='bg-violet-400 hover:bg-violet-500 text-white px-10 py-2 font-bold text-lg rounded-md m-5 transition-all duration-200 cursor-pointer'>Suprise Me</button>
            </div>
        </div>
    )
}

export default Testimonial
