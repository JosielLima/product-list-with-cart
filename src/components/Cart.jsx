import Typography from '../components/Typography';
import RemoveItem from '../components/RemoveItem';
import Button from '../components/Button';
import EmptyCartSVG from '../assets/images/illustration-empty-cart.svg?react';
import OrderConfirmedSVG from '../assets/images/icon-order-confirmed.svg?react';
import CarbonTreeSVG from '../assets/images/icon-carbon-neutral.svg?react';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import Modal from '../components/Modal';

const Cart = () => {
  const { items = [], removeFromCart, getTotalPrice, resetCart } = useCart() ?? {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
                  ${item.price.toFixed(2)}
                </Typography>
                <Typography variant="preset-4-bold" className="text-rose-500">
                  ${item.totalPrice.toFixed(2)}
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
              <Typography variant="preset-2">${getTotalPrice().toFixed(2)}</Typography>
            </div>
            <div className="flex gap-1 py-3 justify-center bg-rose-50 rounded-md">
              <CarbonTreeSVG />
              <Typography variant="preset-4">This is a </Typography>
              <Typography variant="preset-4-bold">carbon-neutral</Typography>
              <Typography variant="preset-4">delivery</Typography>
            </div>
            <div>
              <Button placeholder={'Confirm Order'} onClick={handleConfirmOrder} />
            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} resetCart={resetCart}>
            <div>
              <div className="pb-4">
                <OrderConfirmedSVG />
              </div>
              <Typography variant="preset-2">Order Confirmed!</Typography>
              <Typography variant="preset-4" className="text-rose-500">
                We hope you enjoy your food!
              </Typography>
            </div>
            <div className=" bg-rose-50 rounded-md">
              {items.length > 0 &&
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-4 my-4 gap-2 border-b border-rose-100 pb-4"
                  >
                    <div>
                      <Typography variant="preset-4-bold">{item.name}</Typography>

                      <div className="flex gap-2 items-center">
                        <Typography variant="preset-4-bold" className="text-brand-primary">
                          {item.quantity} x
                        </Typography>
                        <Typography variant="preset-3" className="text-rose-900">
                          ${item.price.toFixed(2)}
                        </Typography>
                      </div>
                    </div>
                    <Typography variant="preset-4-bold" className="text-rose-500">
                      ${item.totalPrice.toFixed(2)}
                    </Typography>
                  </div>
                ))}
              <div className="p-4 flex justify-between items-center gap-2 border-b border-rose-100 pb-4">
                <Typography variant="preset-4">Order Total</Typography>
                <Typography variant="preset-2">${getTotalPrice().toFixed(2)}</Typography>
              </div>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Cart;
