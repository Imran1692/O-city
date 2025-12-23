import React from 'react'
import CategoryDesign from './CategoryDesign'
import FruVeg from '../images/download.png'
import MetSea from '../images/meat.png'
import BarEggs from '../images/bareggs.png'
import Button from './Button'

const Category = () => {


  const renderCards = category.map(card => {
    return(
      <div className='flex-1 basis-[300px] '>
        <div className=' w-full min-h-[40vh]  relative -mb-8'>
         <img src={card.images}  />
        </div>
        <div className='bg-zinc-200 pt-8 rounded-xl p-5'>
          <h3 className='text-zinc-800 font-bold text-3xl'>
            {card.title}
          </h3>
          <br />
          <p className='text-xs font-medium'>
            {card.description}
          </p>
          <br />
          <Button buttonName="See All" />
        </div>
      </div>
    )
  })

  return (
    <section>
        <div className='mx-10 my-3.5'>
            <div className=''>
                <CategoryDesign Design="shop" NonDesign="by Category" />
            </div> 
            {/* Category card */}
            <div className='flex flex-wrap gap-10 mt-8'>
              {renderCards}
            </div>
        </div>

    </section>
  )
}

export default Category

const category = [
  {
    id:1,
    title:'Fruits & Veggies',
    description:'Fruits are the sweet, seed-bearing structures from flowering plants (like apples, berries), while vegetables are any other edible plant part (roots, stems, leaves, flowers, or even "fruit vegetables" like tomatoes) ',
    images:FruVeg
  },
  {
    id:2,
    title:'Meat & Seafood',
    description:'Meat and seafood are both animal-based proteins, with meat typically referring to land animals (beef, pork, poultry) and seafood encompassing aquatic life (fish, shellfish like shrimp, crab, oysters)',
    images:MetSea
  },
  {
    id:3,
    title:'Bairy & Eggs',
    description:'Bairy & eggs" likely refers to Dairy & Eggs, a staple food category offering rich protein, fats, vitamins (A, D, B12), and minerals like iron, with eggs providing albumin (protein)',
    images:BarEggs
  }
]
