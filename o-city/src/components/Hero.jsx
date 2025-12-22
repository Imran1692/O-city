import React from 'react'
import fruites from '../images/fruites.png'
import Button from './Button'
const Hero = () => {
    return (
        <section className='mx-10 my-3.5 flex justify-center items-center md:py-15  py-20 md:flex-row flex-col'>

            {/* hero contain */}
            <div className='flex-1'>
                <span className='rounded-2xl  bg-amber-100 text-amber-500   text-lg md:text-xl'>Export Best Quality... </span>

                <h1 className="text-5xl font-semibold leading-normal    md:text-6xl font-extrabold leading-tight">
                    Tasty Organic{" "} <br />
                    <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                        Fruits
                    </span>{" "}
                    &{" "}
                    <span className="bg-gradient-to-r from-green-500 to-emerald-800 bg-clip-text text-transparent">
                        Veggies
                    </span>{" "} <br />
                    In Your City
                </h1>

                <p className='md:text-gray-500 font-light font-semibold text-2xl font-medium text-sm'>
                    Bred for a high content of beneficial substances.Our products are all fresh and healthy
                </p>
                <br />
                {/* props use kore hoiche */}
                <Button buttonName="Shop Now" />
            </div>
            {/* image */}
            <div className='flex-1'>
                <img src={fruites} alt="" />
            </div>
        </section>
    )
}

export default Hero