import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
import MonProducts from './pages/MonProducts';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<ProductList />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          {/* <Route path="/product/:id" element={<Product />} /> */}
          <Route path="/productdetails" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;