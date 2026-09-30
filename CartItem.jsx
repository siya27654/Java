import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(
      updateQuantity({
        id,
        quantity: Number(quantity),
      })
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <p>${item.price}</p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <p>
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>

        <button
          onClick={() =>
            alert("Thank you for shopping at Paradise Nursery!")
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
