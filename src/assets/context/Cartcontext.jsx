import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para añadir productos al carrito
  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calcular el total del carrito
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
