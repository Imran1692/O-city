import React, { useState } from 'react'
import Button from './Button'
import Strw from '../images/Strawberry.png'
import Egg from '../images/eggs.png'
import Cabb from '../images/cabbage.png'
import Capsi from '../images/capsicum.png'
import Butt from '../images/butter.png'
import Cards from './Cards'
import CategoryDesign from './CategoryDesign'

const Products = () => {


    const categoris = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']

    const [active,SetActive] = useState('All');


    let allProduct = active === 'All' ? product : product.filter(item => item.categori === active) ;

    const productsItem = allProduct.map(items =>{
        return(
            <Cards title={items.title} image={items.image} price={items.price} />
        )
    })
    return (
        <section className='mx-10 my-3.5'>
            <div>


                <CategoryDesign Design="Our" NonDesign="Products" />


                {/* Task */}
                <div className='flex gap-10 justify-center items-center my-5  '>
                    {categoris.map(categori => {
                        return (
                            <div>
                                <button onClick={()=>SetActive(categori)}
                                className={`px-5 py-2 text-lg rounded-2xl cursor-pointer ${ active === categori ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white': 'bg-zinc-300' }`}
                               >
                                    {categori}
                                </button>
                            </div>
                        )
                    })}
                </div>

                {/* products */}
                <div className='grid md:grid-cols-4 grid-cols-2 gap-9'>
                    {productsItem}
                </div>
            </div>
        </section>
    )
}

export default Products


const product = [
    {
        id:1,
        title:'Strawberry',
        image:Strw,
        price:'$3.00',
        categori:'Fruits',
    },
    {
        id:1,
        title:'Capsicum',
        image:Capsi,
        price:'$3.50',
        categori:'Vegetables',
    },
    {
        id:1,
        title:'Eggs',
        image:Egg ,
        price:'$2.50',
        categori:'Dairy',
    },
    {
        id:1,
        title:'Cabbage',
        image:Cabb,
        price:'$5.00',
        categori:'Vegetables',
    },
    {
        id:1,
        title:'Butter',
        image:Butt,
        price:'$6.00',
        categori:'SeaFood',
    }
]