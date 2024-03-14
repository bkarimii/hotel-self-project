import Search from "@/components/Search/Search";
// import SearchResults from "@/componentsSearchResults.js";
import fakeBookings from "@/data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";
import { useEffect, useState } from "react";
import "./Bookings.scss";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewBook({ ...newBook, [id]: value });
  };
  const addNewBook = (e) => {
    e.preventDefault();
    setBooking(...bookings, newBook);
    console.log(newBook, "<------this is newbooking array");
  };

  const search = (searchVal) => {
    setBooking(
      fakeBookings.filter((person) => {
        return (
          person.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          person.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
    console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    setBooking(fakeBookings);
    // const linkToFetch = "https://phrygian-cheddar-antler.glitch.me";
    // fetch(linkToFetch)
    //   .then((response) => {
    //     if (!response.ok) {
    //       console.error("fetch wasn't document, an error happened");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setBooking(data);
    //   });
    console.log("hi there i'm inside a useEffect hook");
  }, []);
  return (
    <main className="bookings">
      <div className="form-container">
        <form
          onSubmit={(e) => {
            addNewBook(e);
          }}
        >
          <label htmlFor="id">ID</label>
          <input
            type="number"
            id="id"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.id}
          ></input>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.title}
          ></input>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.firstName}
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="surname"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.surname}
          ></input>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.email}
          ></input>
          <label htmlFor="room-id">Room ID</label>
          <input
            type="text"
            id="roomId"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.roomId}
          ></input>
          <label htmlFor="checkInDate">CheckIn Date</label>
          <input
            type="text"
            id="checkInDate"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.checkInDate}
          ></input>
          <label htmlFor="checkOutDate">CheckOut Date</label>
          <input
            type="text"
            id="checkOutDate"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.checkOutDate}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Search search={search} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
