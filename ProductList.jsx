import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b2c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Succulents",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Echeveria",
    category: "Succulents",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = React.useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems((previous) => [...previous, product.id]);
  };

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>

            <button
              onClick={() => handleAddToCart(product)}
              disabled={addedItems.includes(product.id)}
            >
              {addedItems.includes(product.id) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
