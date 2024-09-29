import Typography from '../components/Typography';
import RemoveItem from '../components/RemoveItem';
import Button from '../components/Button';
import EmptyCartSVG from '../assets/images/illustration-empty-cart.svg?react';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { items = [], removeFromCart, getTotalPrice } = useCart() ?? {};

  return (
    <div className="w-full p-6 bg-white rounded-md flex flex-col gap-6">
      <Typography variant="preset-2" className="text-brand-primary">
        Your Cart ({items.length})
      </Typography>

      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="flex justify-between items-center gap-2 border-b border-rose-100 pb-4">
            <div>
              <Typography variant="preset-4-bold">{item.name}</Typography>

              <div className="flex gap-2 items-center">
                <Typography variant="preset-4-bold" className="text-brand-primary">
                  {item.quantity} x
                </Typography>
                <Typography variant="preset-4" className="text-rose-500">
                  ${item.price}
                </Typography>
                <Typography variant="preset-4-bold" className="text-rose-500">
                  ${item.totalPrice}
                </Typography>
              </div>
            </div>
            <RemoveItem onClick={() => removeFromCart(item.name)} />
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-4 items-center grow">
          <EmptyCartSVG />
          <Typography variant="preset-4" className="text-rose-500">
            Your added items will appear here
          </Typography>
        </div>
      )}
      {items.length > 0 && (
        <>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center gap-2 border-b border-rose-100 pb-4">
              <Typography variant="preset-4">Order Total</Typography>
              <Typography variant="preset-2">{getTotalPrice()}</Typography>
            </div>
            <div className="flex gap-1 py-3 justify-center bg-rose-50 rounded-md">
              <Typography variant="preset-4">This is a </Typography>
              <Typography variant="preset-4-bold">carbon-neutral</Typography>
              <Typography variant="preset-4">delivery</Typography>
            </div>
            <div>
              <Button placeholder={'Confirm Order'} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
