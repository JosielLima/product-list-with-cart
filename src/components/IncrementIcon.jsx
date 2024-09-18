import IncrementSVG from '../assets/images/icon-increment-quantity.svg?react'

const IncrementIcon = () => {
  return (
    <div>
      <IncrementSVG className="w-6 h-6 text-white rounded-full p-1 border-solid border-2 border-white hover:bg-white hover:text-brand-primary cursor-pointer" />
    </div>
  )
}

export default IncrementIcon