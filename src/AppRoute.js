import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import AddToCart from "./component/AddToCart";

function AppRoute() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prvCart) => {
      const existingItme = prvCart.find((item) => item.id === product.id);
      if (existingItme) {
        return prvCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prvCart, { ...product, quantity: 1 }];
    });
  };

  const udateCart = (id, cahnge) => {
    setCart((prvCart) => {
      return prvCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + cahnge } : item
      );
    });
  };
  const removeCart = (id) => {
    setCart((prvCart) => {
      return prvCart.filter((item) => item.id !== id);
    });
  };
  const checkout = () => {
    setCart([]);
    alert("Thanks for order");
  };

  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          background: "#f8f9fa",
        }}
      >
        <Link to='/' style={{ textDecoration: "none", fontSize: "18px" }}>
          Home
        </Link>
        <Link
          to='/cart'
          style={{
            textDecoration: "none",
            fontSize: "18px",
            marginLeft: "auto",
          }}
        >
          Cart ({cart.length})
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} />} />
        <Route
          path='/cart'
          element={
            <AddToCart
              cart={cart}
              udateCart={udateCart}
              removeCart={removeCart}
              checkout={checkout}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
