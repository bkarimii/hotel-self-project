import React from "react";
function SearchResults({ results }) {
  const tableRow = results.map((item) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.firstName}</td>
        <td>{item.surname}</td>
        <td>{item.email}</td>
        <td>{item.roomId}</td>
        <td>{item.checkInDate}</td>
        <td>{item.checkOutDate}</td>
      </tr>
    );
  });

  return (
    <>
      <table className="table table-bordered">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check in Date</th>
          <th>Check out Date</th>
        </tr>
        {tableRow}
      </table>
    </>
  );
}

export default SearchResults;
