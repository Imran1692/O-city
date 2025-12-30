import React from 'react'
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleFourFill } from "react-icons/pi";
import { MdFactory } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { FaPiedPiperAlt } from 'react-icons/fa6'
import CategoryDesign from './CategoryDesign';

const Process = () => {

    const process = processItems.map(items => {
        return (
            <div className={`flex-1 ${items.id % 2 === 0 ? 'md:-mt-60' : ''}`}>
                <span className='md:flex w-15 h-15 text-7xl outline-2  outline-dashed outline-zinc-800  outline-offset-4 rounded-full items-center justify-center bg-zinc-800 text-white'>{items.number}</span>

                <div className='flex items-center gap-3 mt-4'>
                    <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-600 h-14 w-14 text-white text-3xl rounded-full'>
                        {items.icone}
                    </span>

                    <div>
                        <h3 className='text-3xl font-bold text-zinc-700'>
                            {items.title}
                        </h3>
                        <p className='text-xl font-semibold'>
                            {items.para}
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='mx-10 my-3.5'>
            <div className='mt-3 w-fit '>
                <CategoryDesign Design='Our' NonDesign='Process' />
            </div>
            <div className='md:flex md:mt-8 md:pt-60 mt-10 '>
                {process}
            </div>
        </div>
    )
}

export default Process

const processItems = [
    {
        id: 1,
        number: <PiNumberCircleOneFill />,
        title: 'Sourcing',
        para: 'It si a long established fact that a reader',
        icone: <FaPiedPiperAlt />
    },
    {
        id: 2,
        number: <PiNumberCircleTwoFill />,
        title: 'Manufacturing',
        para: 'It si a long established fact that a reader',
        icone:<MdFactory />
    },
    { 
        id: 3,
        number: <PiNumberCircleThreeFill />,
        title: 'Quality Control',
        para: 'It si a long established fact that a reader',
        icone:<SlBadge />
    },
    {
        id: 4,
        number:<PiNumberCircleFourFill />,
        title: 'Logistics',
        para: 'It si a long established fact that a reader',
        icone:<TbTruckDelivery />
    }
]