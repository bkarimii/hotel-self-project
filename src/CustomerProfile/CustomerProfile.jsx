import React from "react";

const CustomerProfile = ({ id }) => {
  return <>{id && <div>Customer {id} profile !</div>}</>;
};

export default CustomerProfile;
