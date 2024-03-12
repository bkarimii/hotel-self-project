import React, { useState } from "react";
import "./AddBooking.scss";

function AddBooking() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    firstName: "",
    lastName: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });

  function handleInput(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function createRowtable(formData) {
    <tr>
      <td>{formData.customerId}</td>
      <td>{formData.title}</td>
      <td>{formData.firstName}</td>
      <td>{formData.lastName}</td>
      <td>{formData.roomId}</td>
      <td>{formData.checkInDate}</td>
      <td>{formData.checkOutDate}</td>
    </tr>;
  }
  return (
    <>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="customerId">Customer ID</label>
          <input
            type="number"
            id="customerId"
            onChange={handleInput}
            value={formData.customerId}
          ></input>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={handleInput}
            value={formData.title}
          ></input>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="fisrtName"
            onChange={handleInput}
            value={formData.firstName}
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={handleInput}
            value={formData.lastName}
          ></input>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            onChange={handleInput}
            value={formData.email}
          ></input>
          <label htmlFor="room-id">Room ID</label>
          <input
            type="text"
            id="roomId"
            onChange={handleInput}
            value={formData.roomId}
          ></input>
          <label htmlFor="checkInDate">CheckIn Date</label>
          <input
            type="text"
            id="checkInDate"
            onChange={handleInput}
            value={formData.checkInDate}
          ></input>
          <label htmlFor="checkOutDate">CheckOut Date</label>
          <input
            type="text"
            id="checkOutDate"
            onChange={handleInput}
            value={formData.checkOutDate}
          ></input>
          <button type="submit" onSubmit={(e) => createRowtable(formData)}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBooking;
