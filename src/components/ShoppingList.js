
import React, { useState } from "react";

const ShoppingList = () => {
  const [category, setCategory] = useState("All");

  const items = [
    { name: "Yogurt", category: "Dairy" },
    { name: "Pomegranate", category: "Produce" },
    { name: "Lettuce", category: "Produce" },
    { name: "String Cheese", category: "Dairy" },
    { name: "Cookies", category: "Dessert" },
  ];

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {items
          .filter((item) => category === "All" || item.category === category)
          .map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span className="category">{item.category}</span>
              <button className="add">Add to Cart</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
