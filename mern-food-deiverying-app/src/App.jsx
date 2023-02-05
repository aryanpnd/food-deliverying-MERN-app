import './App.css';
import Home from './screens/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import {CartProvider} from './components/ContextReducer.js'
import MyOrders from './screens/MyOrders';


function App() {
  return (
    <CartProvider>
      <Router>

        <div className='p-0 m-0'>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/myOrders' element={<MyOrders />} />
          </Routes>

        </div>

      </Router>
    </CartProvider>
  );
}

export default App;
