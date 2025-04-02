import React from "react";

function AddToCart({ cart, udateCart, removeCart, checkout }) {
  console.log(cart);

  function calculateTotalPrice() {
    const totalPrice = cart
      ?.map((item) => item.price * item.quantity)
      ?.reduce((a, b) => a + b, 0);
    return totalPrice.toFixed(2);
  }
  calculateTotalPrice();
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1>Cart</h1>
      {cart?.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart?.map((item) => (
          <div
            key={item?.id}
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
            <img src={item?.image} alt='' style={{ width: 100, height: 100 }} />
            <p>Price: {item?.price}</p>
            <p>Quantity: {item?.quantity}</p>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => udateCart(item?.id, 1)}
            >
              +
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => removeCart(item?.id, 1)}
              disabled={item?.quantity === 1}
            >
              -
            </button>
          </div>
        ))
      )}
      <div>
        <p>{calculateTotalPrice()}</p>
        <button onClick={() => checkout()} style={{ cursor: "pointer" }}>
          {cart?.length === 0 ? "Add Item" : "Pay"}
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
