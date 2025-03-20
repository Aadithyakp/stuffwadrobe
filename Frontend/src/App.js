
import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from'./pages/Register'
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";


import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <div className="App">
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route path="/products/:category?" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user? <Navigate to="/"/>:<Login/>}/>
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
