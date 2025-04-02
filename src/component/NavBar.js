import React from "react";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        backgroundColor: "#008000",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src='https://blinkit.com/favicon.ico'
          alt='Blinkit Logo'
          style={{ height: "40px", width: "40px", marginRight: "8px" }}
        />
        <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
          Blinkit
        </span>
      </div>
      <div>
        <input
          type='text'
          placeholder='Search for products'
          style={{
            padding: "8px",
            borderRadius: "8px",
            width: "320px",
            outline: "none",
          }}
        />
      </div>
      <div>
        <button
          style={{
            color: "white",
            backgroundColor: "#FFD700",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
