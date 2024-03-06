import React, { useState } from "react";

const Restaurant = () => {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    setOrder((prevOrder) => prevOrder + 1);
  };

  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <li className="restaurant__item">
          Pizzas: {order}{" "}
          <button className="button restaurant__button" onClick={orderOne}>
            Add
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Restaurant;
