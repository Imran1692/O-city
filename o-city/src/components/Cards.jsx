import React from 'react'
import { FaHeart, FaMobileRetro } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Button from './Button';

const Cards = ( {title,image,price} ) => {
  return (
    <div className='bg-zinc-200 p-5'>
         {/* icone image */}
        <div className='flex justify-between items-center'>
            <span className='text-3xl text-zinc-400'>
                <FaHeart />
            </span>
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-xl px-3 py-4 rounded-xl text-white'>
                <FaPlus />
            </button>
        </div>
        {/* Card image */}
        <div className='w-full h-40 mt-1 mb-1'>
             <img src={image} className='w-full h-full object-contain'/>
        </div>
        {/* Card details */}
        <div className='text-center '>
            <h3 className='text-2xl font-medium'>{title}</h3>
            <p className='text-2xl font-bold mt-2 mb-1'>{price}</p>
            <Button buttonName={'Shop Now'} />
        </div>
    </div>
  )
}

export default Cards