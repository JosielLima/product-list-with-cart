import DecrementSVG from '../assets/images/icon-decrement-quantity.svg?react';

const DecrementIcon = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <DecrementSVG className="w-6 h-6 text-white rounded-full p-1 border-solid border-2 border-white hover:bg-white hover:text-red-500 cursor-pointer" />
    </div>
  );
};

export default DecrementIcon;
