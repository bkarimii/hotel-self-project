import { React, useState } from "react";
import CalculationDuration from "@/components/CalculationDuration/CalculationDuration.jsx";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import "./SearchResult.scss";

function SearchResults({ results }) {
  const [clickOnRow, setClickOnRow] = useState(
    Array(results.length).fill(false)
  );

  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const handleClickSelectedCustomer = (id) => {
    return setSelectedCustomerId((customerId) => {
      return id;
    });
  };

  const handleClickOnRow = (index) => {
    setClickOnRow((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const tableRow = results.map((item,index) => {
    return (
      <tr
        key={item.id}
        onClick={() => handleClickOnRow(index)}
        // style={clickOnRow[index] ? { backgroundColor: "rgb(107, 4, 225)" } : {}}
        className={clickOnRow[index] ? "clicked-on-row" : ""}
      >
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.firstName}</td>
        <td>{item.surname}</td>
        <td>{item.email}</td>
        <td>{item.roomId}</td>
        <td>{item.checkInDate}</td>
        <td>{item.checkOutDate}</td>
        <td>
          <CalculationDuration
            checkOut={item.checkOutDate}
            checkIn={item.checkInDate}
          />
        </td>
        <td>
          <button onClick={() => handleClickSelectedCustomer(item.id)}>
            Show Profile
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check in Date</th>
            <th>Check out Date</th>
            <th>Reserved for /nights</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
      <CustomerProfile id={selectedCustomerId} />
    </>
  );
}

export default SearchResults;
