import './App.css';
import {useState, useEffect} from 'react';
import ProductTable from './components/ProductTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  const [products, setProducts] = useState(new Map());
  const [cart, setCart] = useState(new Map());

  useEffect(() => {
    const url = 'https://dummyjson.com/products';
    fetch(url)
    .then(response => response.json())
    .then(data => {      
      const products = new Map(
        data.products.map(product => [product.id, product])       
      );      
      setProducts(products);
    });
  }, []);

  function addToCart(id, amount) {
    if (cart.has(id)) {     
      const newCart = new Map(cart.set(id, cart.get(id) + amount));
      setCart(newCart);
    } else {        
      const newCart = new Map(cart.set(id, amount));      
      setCart(newCart);
    }
    alert('Product added succesfully to the cart');
  }

  function deleteFromCart(id) {
    const newCart = new Map(cart);
    newCart.delete(id);
    setCart(newCart);
  }

  return (
    <div className="App">    
      <Router>
        <NavBar />
        
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductTable products={products} />} /> 
          <Route path="/product/:id" element={
            <ProductPage 
              products={products} 
              cart={cart} 
              addToCart={addToCart}             
            />
          } 
          />        
          <Route path="/cart" element={
            <Cart 
              cart={cart} 
              products={products} 
              deleteFromCart={deleteFromCart}
            />} 
          />   
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
