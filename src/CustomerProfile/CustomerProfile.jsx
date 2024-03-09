import React from "react";

const CustomerProfile = ({ id }) => {
  const displaText = () => {
    console.log("hi there!");
  };

  return <button onClick={displaText}>Show Profile</button>;
};

export default CustomerProfile;
