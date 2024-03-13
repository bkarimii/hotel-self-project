import Search from "@/components/Search/Search";
// import SearchResults from "@/componentsSearchResults.js";
import FakeBookings from "@/data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";
import { useState } from "react";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const search = (searchVal) => {
    setBooking(
      bookings.filter((person) => {
        return (
          person.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          person.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
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
