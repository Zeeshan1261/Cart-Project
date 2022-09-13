// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
// 'https://fakestoreapi.com/products'
function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);  // (lists)
  console.log(items);
  // console.log(myCart());

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json.products));
  }, []);

  const myCart = (lists) => {
    setCart((previous) => [...previous, lists]);
    // Previous Paramater selects previous + current value by using ... spread operator
  };
  return (
    <>
      {" "}
      <div className="title">
        <h1>Welcome to Ecommerce</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Products items={items} myCart={myCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
