import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const pizzaImages = [
  { id: 'p001', name: 'Margarita', imgSrc: '/src/assets/imgs/pizza1.jpg', price: 10.99 },
  { id: 'p002', name: 'Pepperoni', imgSrc: '/src/assets/imgs/pizza2.jpg', price: 12.99 },
  { id: 'p003', name: 'Cuatro Quesos', imgSrc: '/src/assets/imgs/pizza3.jpg', price: 13.99 },
  { id: 'p004', name: 'Hawaiana', imgSrc: '/src/assets/imgs/pizza4.jpg', price: 11.99 },
  { id: 'p005', name: 'Vegetariana', imgSrc: '/src/assets/imgs/pizza5.jpg', price: 14.99 },
  { id: 'p006', name: 'Barbacoa', imgSrc: '/src/assets/imgs/pizza6.jpg', price: 15.99 },
];

const Pizza = () => {
  const { addToCart } = useContext(CartContext);  // Usar el contexto para añadir al carrito

  return (
    <div className="pizza-container">
      {pizzaImages.map(pizza => (
        <div className="pizza-item" key={pizza.id}>
          <img src={pizza.imgSrc} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <p>Deliciosa pizza con ingredientes frescos.</p>
          <button onClick={() => addToCart(pizza)}>Añadir al carrito</button>  {/* Pasar pizza al contexto */}
        </div>
      ))}
    </div>
  );
};

export default Pizza;
