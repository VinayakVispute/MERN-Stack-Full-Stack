import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useState } from 'react';
import { toast } from 'react-toastify';




const Card = ({ course }) => {
  const [isLiked, setIsLiked] = useState(false);

  function clickHandler() {
    if (!isLiked) {
      toast.success("Post Liked")
      setIsLiked(true);
    } else {
      toast.warning("Post unliked")
      setIsLiked(false)
    }
  }






  return (
    <div className='w-[300px] rounded-md overflow-hidden ' style={{
      '--tw-bg-opacity': .8,
      backgroundColor: 'rgb(34 34 59/var(--tw-bg-opacity))',
    }}
    >
      <div className='relative'>
        <img src={course.image.url} alt={course.image.alt} />
        <div className='w-[40px] h-[40px] bg-white  rounded-full absolute right-2 bottom-[-11px]
        grid place-items-center'>
          <button onClick={clickHandler}>
            {
              !isLiked ?
                (<FcLikePlaceholder fontSize={"1.74rem"} />) :
                (<FcLike fontSize={"1.74rem"} />)


            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{
          course.description.length > 100 ?
            (course.description.substr(0, 100) + "...") :
            (course.description)
        }</p>
      </div>
    </div>
  );
};

export default Card;
