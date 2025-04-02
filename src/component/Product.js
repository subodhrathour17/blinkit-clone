import { Link } from "react-router-dom";

const Product = ({ products, addToCart }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid",
        padding: 10,
        margin: 10,
      }}
    >
      <img
        src={products?.image}
        alt={products?.tittle}
        style={{ width: 100, height: 100 }}
      />
      <h4>{products?.tittle}</h4>

      <p>
        {"₹"}
        {products?.price}
      </p>
      <button onClick={() => addToCart(products)} style={{ cursor: "pointer" }}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
