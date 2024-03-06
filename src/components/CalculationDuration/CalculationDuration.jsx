import React from "react";
import dayjs from "dayjs";

const CalculationDuration = ({ checkOut, checkIn }) => {
  checkOut = dayjs(checkOut);
  checkIn = dayjs(checkIn);
  return checkOut.diff(checkIn, "day");
};

export default CalculationDuration;
