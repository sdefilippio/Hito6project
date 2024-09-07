import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home';
import Register from './assets/pages/Register';
import Login from './assets/pages/Login';
import Cart from './assets/pages/Cart';
import Pizza from './assets/pages/Pizza';
import Profile from './assets/pages/Profile';
import NotFound from './assets/pages/NotFound';
import Navbar from './assets/components/Navbar';
import './index.css';


import { CartProvider } from './assets/context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
