import RemoveSVG from '../assets/images/icon-remove-item.svg?react';

const RemoveItem = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <RemoveSVG className="rounded-full text-rose-400 border border-rose-400 hover:text-rose-800 hover:border-rose-800 cursor-pointer w-6 h-6 p-1" />
    </div>
  );
};

export default RemoveItem;
