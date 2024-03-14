import Search from "@/components/Search/Search";
// import SearchResults from "@/componentsSearchResults.js";
import FakeBookings from "@/data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";
import { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const [newBook, setNewBook] = useState({
    id: null,
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: null,
    checkInDate: "",
    checkOutDate: "",
  });

  const addNewBook = () => {};

  const search = (searchVal) => {
    setBooking(
      FakeBookings.filter((person) => {
        return (
          person.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          person.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
    console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    const linkToFetch = "https://phrygian-cheddar-antler.glitch.me";
    fetch(linkToFetch)
      .then((response) => {
        if (!response.ok) {
          console.error("fetch wasn't document, an error happened");
        }
        return response.json();
      })
      .then((data) => {
        setBooking(data);
      });
    console.log("hi there i'm inside a useEffect hook");
  }, []);
  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
