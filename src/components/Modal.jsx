import { useCallback } from 'react';
import Button from '../components/Button';

const Modal = ({ isOpen, onClose, children, resetCart }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  const startNewOrder = () => {
    resetCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bg-black bg-opacity-50 flex items-center justify-center md:inset-0 xs:bottom-0 xs:inset-x-0 "
      onClick={handleBackgroundClick}
    >
      <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-lg lg:w-[592px] md:w-[94vh] xs:w-[100vh] xs:h-[calc(100vh-72px)] md:h-[calc(100vh-200px)]">
        <div className="overflow-y-auto">{children}</div>
        <Button placeholder={'Start New Order'} onClick={startNewOrder} />
      </div>
    </div>
  );
};

export default Modal;
