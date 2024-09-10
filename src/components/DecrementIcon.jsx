import React from 'react'
import DecrementSVG from '../assets/images/icon-decrement-quantity.svg?react'

const DecrementIcon = () => {
  return (
    <div>
      <DecrementSVG className="w-6 h-6 text-white rounded-full p-1 border-solid border-2 border-white hover:bg-white hover:text-red cursor-pointer" />
    </div>
  )
}

export default DecrementIcon