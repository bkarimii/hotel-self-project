import React from "react";
import { useEffect, useState } from "react";
const CustomerProfile = ({ id }) => {
  const link = `https://cyf-react.glitch.me/customers/<${id}>`;
  const [customerData, setCustomerData] = useState(null);
  useEffect(() => {
    fetch(link)
      .then((response) => {
        if (!response.ok) {
          console.log("fetch didn't happen!Error!");
        }
        return response.json();
      })
      .then((data) => {
        console.log(response.json(), "this is responce");
        return setCustomerData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]);
  console.log(customerData, "<-----this is customer data", `for id ${id}`);
  return (
    <>
      <p>hi there//////////////!</p>
    </>
  );
};

export default CustomerProfile;
