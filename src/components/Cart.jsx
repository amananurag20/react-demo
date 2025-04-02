import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  function handleRemove(item) {
    dispatch(removeItem(item));
  }

  if (cartItems.length == 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>cart item is empty</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Cart Page</h1>
      <button onClick={() => dispatch(clearCart())}>Clear cart</button>

      <div>
        {cartItems.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "15px",
                margin: "20px",
                padding: "10px",
                backgroundColor: "gray",
                justifyContent: "space-between",
              }}
            >
              <img src={item.image} style={{ width: "120px" }}></img>
              <div>
                <h2> {item.title} </h2>
                <p>{item.description}</p>
              </div>
              <button onClick={() => handleRemove(item)}>Remove item</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
