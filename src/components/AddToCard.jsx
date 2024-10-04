import AddToCardSVG from '../assets/images/icon-add-to-cart.svg?react';
import IncrementIcon from './IncrementIcon';
import DecrementIcon from './DecrementIcon';
import { useCart } from '../hooks/useCart';

const AddToCard = ({ product }) => {
  const { items = [], removeFromCart, addToCart } = useCart() ?? {};
  const productInCart = items.find((item) => item.name === product.name);
  const quantity = productInCart ? productInCart.quantity : 0;
  return (
    <>
      {quantity === 0 ? (
        <button
          onClick={() => addToCart(product)}
          className="py-3 px-6 w-[160px] inline-flex flex items-center gap-x-1 border border-rose-400 rounded-full bg-white text-rose-900 hover:border-brand-primary hover:text-brand-primary"
        >
          <AddToCardSVG />
          Add to card
        </button>
      ) : (
        <div className="flex gap-2 bg-rose-500 rounded-md">
          <DecrementIcon onClick={() => removeFromCart(product.name)} />
          {quantity}
          <IncrementIcon onClick={() => addToCart(product)} />
        </div>
      )}
    </>
  );
};

export default AddToCard;
