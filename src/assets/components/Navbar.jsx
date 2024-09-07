import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/cart">🛒 Total: ${totalPrice.toFixed(2)}</Link>
    </nav>
  );
};

export default Navbar;
