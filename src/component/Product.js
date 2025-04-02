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
      <Link to={`/product/${products.id}`}>
        <img
          src={products.image}
          alt={products.tittle}
          style={{ width: 100, height: 100 }}
        />
        <h4>{products.tittle}</h4>
      </Link>
      <p>
        {"₹"}
        {products.price}
      </p>
      <button onClick={() => addToCart(products)}>Add to Cart</button>
    </div>
  );
};

export default Product;
