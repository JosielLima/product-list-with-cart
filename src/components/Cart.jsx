import Typography from '../components/Typography';
import EmptyCartSVG from '../assets/images/illustration-empty-cart.svg?react';

const Cart = () => {
  return (
    <div className="w-full p-6 bg-white rounded-md flex flex-col gap-6">
      <Typography variant="preset-2" className="text-brand-primary">
        Your Cart (0)
      </Typography>
      <div className="flex flex-col gap-4 items-center grow">
        <EmptyCartSVG />
        <Typography variant="preset-4" className="text-rose-500">
          Your added items will appear here
        </Typography>
      </div>
    </div>
  );
};

export default Cart;
