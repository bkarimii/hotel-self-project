import React from "react";
import { useEffect, useState } from "react";
const CustomerProfile = ({ id }) => {
  const link = `https://phrygian-cheddar-antler.glitch.me`;
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
        console.log(data, "this is responce");
        return setCustomerData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]);
  console.log(customerData, "<-----this is customer data", `for id ${id}`);
  return (
    <>
      <p>hi there customer {id}!</p>
    </>
  );
};

export default CustomerProfile;
