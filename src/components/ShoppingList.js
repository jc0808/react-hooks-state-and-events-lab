import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // const [selectedCategory, setSelectedCategory] = useState(items);
  let [filterBy, setFilterBy] = useState("All");

  function selected(event) {
    setFilterBy(filterBy = event.target.value);
  };

  const newArray = items.filter(item => {
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  });


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selected}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
