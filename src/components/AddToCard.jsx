import React from 'react'
import AddToCardSVG from '../assets/images/icon-add-to-cart.svg?react'

const AddToCard = () => {
  return (
    <button className="py-3 px-6 border-1 border-solid border-rose-400 rounded-full bg-white text-rose-900 flex items-center gap-x-3 hover:border-red hover:text-red">
      <AddToCardSVG />
      Add to card
    </button>
  )
}

export default AddToCard