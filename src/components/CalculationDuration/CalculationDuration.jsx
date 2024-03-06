import React from "react";
import dayjs from "dayjs";

const CalculationDuration = ({ checkOut, checkIn }) => {
  checkOut = dayjs(checkOut);
  checkIn = dayjs(checkIn);
  return checkOut.diff(checkIn, "day");
};

export default CalculationDuration;

// import CalculationDuration from "@/components/CalculationDuration/CalculationDuration.jsx";
//  <CalculationDuration
//    checkOut={item.checkOutDate}
//    checkIn={item.checkInDate}
//  />;
