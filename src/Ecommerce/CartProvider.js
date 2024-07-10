import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [badgeCount, setBadgeCount] = useState(0);

  const incrementBadgeCount = () => {
    setBadgeCount(prevCount => prevCount + 1);
  };

  const decrementBadgeCount = () => {
    setBadgeCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <CartContext.Provider value={{ badgeCount, incrementBadgeCount, decrementBadgeCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
