import React, { useState } from "react";

const Order = ({ orderType = "Pizza" }) => {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    setOrder((prevOrder) => prevOrder + 1);
  };
  return (
    <>
      <li className="restaurant__item">
        {orderType}: {order}{" "}
        <button className="button restaurant__button" onClick={orderOne}>
          Add
        </button>
      </li>
    </>
  );
};

export default Order;
