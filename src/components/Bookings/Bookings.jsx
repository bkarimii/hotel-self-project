import Search from "@/components/Search/Search";
// import SearchResults from "@/componentsSearchResults.js";
import FakeBookings from "@/data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";
import { useState } from "react";
import AddBooking from "../AddBooking/AddBooking";

const Bookings = () => {
  const [bookings, setBooking] = useState(FakeBookings);
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
