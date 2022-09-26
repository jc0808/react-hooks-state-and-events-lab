import React, { useState } from "react";

function Item({ name, category }) {

  const [onCart, setOnCart] = useState(false);
  function addCart() {
    setOnCart(onCart => !onCart);
  }
  return (
    <li className={onCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addCart} className="add" style={{ background: onCart ? "purple" : "yellow" }}>{onCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
