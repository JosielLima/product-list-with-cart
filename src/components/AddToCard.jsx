import React from 'react'
import AddToCardSVG from '../assets/images/icon-add-to-cart.svg?react'

const AddToCard = () => {
  return (
    <><button className="py-3 px-6 w-[160px] inline-flex flex items-center gap-x-1 border border-rose-400 rounded-full bg-white text-rose-900 hover:border-red hover:text-red">
      <AddToCardSVG />
      Add to card
    </button></>
  )
}

export default AddToCard