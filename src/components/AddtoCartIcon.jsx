import React from 'react'
import AddIcon from '../assets/images/icon-increment-quantity.svg'

const AddtoCartIcon = () => {
  return (
    <div>
      <img src={AddIcon} alt="Add to Cart Icon" className='rounded-full p-1 border-solid border-2 border-white hover:fill-cyan-700 hover:bg-white cursor-pointer' />
    </div>
  )
}

export default AddtoCartIcon