import React from 'react'

const CategoryDesign = (props) => {
    return (
        <div>
            <h2 className='text-4xl font-extrabold mx-auto w-fit'>
                <span className='text-amber-600'>{props.Design}</span> {props.NonDesign}
                <div className=' w-30 h-1 bg-amber-400 ml-auto mt-2'></div>
            </h2>
        </div>
    )
}

export default CategoryDesign