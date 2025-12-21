import React from 'react'
// ekhane props use kora hoiche
const Button = ({buttonName}) => {
  return (
    <button className='bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-2 rounded-2xl text-white font-medium hover:scale-105 hover:to-amber-600 transition-all duration-500 cursor-pointer '>
        {buttonName}
    </button>
  )
}

export default Button