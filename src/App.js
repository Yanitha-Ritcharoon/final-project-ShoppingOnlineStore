import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Orders from './components/Orders';
import CustomNavbar from './components/Custom-Navbar';
import Footer from './components/Footer';
import "./App.css";
import { createContext, useState } from 'react';

export const OrdersContext = createContext();

function App() {
  const [totalOrders, setTotalOrders] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <OrdersContext.Provider value={{totalOrders, setTotalOrders, cartItems, setCartItems}}>
      <Router>
          <div>
          <CustomNavbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
          </Routes>
          <Footer />
          </div>
      </Router>
    </OrdersContext.Provider>
  );
}

export default App;