import React from 'react'
import CategoryDesign from './CategoryDesign'
import { FaHeart, FaLeaf, FaSeedling, FaShieldHalved } from 'react-icons/fa6'
import Basfur from '../images/basket.png'

const Values = () => {
  const leftValues = value.slice(0, 2).map(items => {
    return (
      <div className='flex md:flex-row-reverse  gap-5'>
        <div className=' flex justify-center items-center '>
          <span className='flex h-15 w-15 text-3xl justify-center text-white items-center   bg-gradient-to-b from-orange-400 to-orange-500 rounded-full'>{items.icone}</span>
        </div>
        <div className='md:text-right'>
          <h3 className='font-bold text-4xl text-zinc-800 '>{items.title}</h3>
          <p className='text-zinc-500 font-semibold text-sm'>{items.para}</p>
        </div>
      </div>
    )
  })


   const rightValues = value.slice(2, 4).map(items => {
    return (
      <div className='flex gap-5'>
        <div className=' flex justify-center items-center'>
          <span className='flex h-15 w-15 text-3xl justify-center text-white items-center   bg-gradient-to-b from-orange-400 to-orange-500 rounded-full'>{items.icone}</span>
        </div>
        <div className=''>
          <h3 className='font-bold text-4xl text-zinc-800 '>{items.title}</h3>
          <p className='text-zinc-500 font-semibold text-sm'>{items.para}</p>
        </div>
      </div>
    )
  })


  return (
    <section className='mx-10 my-3.5'>
      <div>
        <CategoryDesign Design='Our' NonDesign='Values' />
      </div>

      <div className='flex md:flex-row flex-col gap-4 mt-5'>
        {/* left values */}
        <div className='min-h-10 flex 
         flex-col justify-between'>
          {leftValues}
        </div>
        <div className='md:flex items-center w-1/2 hidden'>
          <img src={Basfur} />
        </div>
        {/* right values */}
        <div className='md:min-h-100 flex flex-col justify-between '>
          {rightValues}
        </div>
      </div>
    </section>
  )
}

export default Values


const value = [{
  id: 1,
  title: 'Trust',
  para: 'Trust is the essential belief in someones reliability, integrity, or ability, forming the bedrock of all meaningful relationships and cooperation',
  icone: <FaHeart />
},
{
  id: 2,
  title: 'Always Fresh',
  para: ' A fresh start, banishing lethargy and connecting you with nature for a healthier, happier day',
  icone: <FaLeaf />
},
{
  id: 3,
  title: 'Food Safety',
  para: ' a scientific discipline describing handling, preparation, and storage of food in ways that prevent food borne',
  icone: <FaShieldHalved />
},
{
  id: 4,
  title: '100% Organic',
  para: 'Products with 100% organic ingredients (excluding salt/water) grown without synthetic inputs or GMOs, adhering to strict farming standards.',
  icone: <FaSeedling />
}
]