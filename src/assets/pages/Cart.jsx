import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((pizza) => (
              <li key={pizza.id}>
                {pizza.name} - ${pizza.price.toFixed(2)}
                <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
