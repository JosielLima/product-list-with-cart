import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
            : item,
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, totalPrice: product.price }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === productName);
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.name !== productName);
      } else {
        return prevItems.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
            : item,
        );
      }
    });
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const prepareForAPI = () => {
    return {
      items: items.map(({ name, quantity, totalPrice }) => ({ name, quantity, totalPrice })),
      totalPrice: getTotalPrice(),
    };
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, getTotalPrice, prepareForAPI }}>
      {children}
    </CartContext.Provider>
  );
};
