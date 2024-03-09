import React, { useState } from "react";
import Order from "../Order/Order";

const Restaurant = () => {
  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <Order />
        <Order orderType="Salad" />
        <Order orderType="Chocolate" />
      </ul>
    </section>
  );
};

export default Restaurant;
