import React, { useEffect, useState } from "react";
import { Api_Url } from "../constant";

import Product from "../component/Product";
import NavBar from "../component/NavBar";

function Home({ addToCart }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(Api_Url)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => alert(err));
  }, []);
  console.log(products);
  return (
    <div>
      <NavBar />
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((item) => (
          <Product key={item.id} products={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
