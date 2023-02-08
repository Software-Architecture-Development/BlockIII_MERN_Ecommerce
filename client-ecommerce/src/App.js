import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './components/Products';
import Cart from './pages/cart';
;

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />}
           />
           <Route path="/cart" element={<Cart />}
           />
        </Routes>
      </div>
    </BrowserRouter>
  );    
}

export default App;