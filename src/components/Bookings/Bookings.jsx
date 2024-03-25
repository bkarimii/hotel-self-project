import Search from "@/components/Search/Search";
// import SearchResults from "@/componentsSearchResults.js";
import fakeBookings from "@/data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";
import { useEffect, useState } from "react";
import ErrorForfetch from "../ErrorForFetch/ErrorForFetch";
import Modal from "../Modal/Modal";
import "./Bookings.scss";

const Bookings = () => {
  const [currentDate, setCurrentDate] = useState("");
  // const [bookings, setBooking] = useState(fakeBookings);
  const [bookings, setBooking] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const addBooking = (newElement) => {
    setBooking([...bookings, newElement]);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewBook({ ...newBook, [id]: value });
  };
  const addNewBook = (e) => {
    e.preventDefault();
    // check if a specific room is already taken
    const hasTheRoomBooked = bookings.some(
      (book) => book.roomId === newBook.roomId
    );
    if (hasTheRoomBooked) {
      alert("This room is already Booked!");
      return;
    }

    //check feilds if they all are filled
    // Check if any of the required fields are empty
    const requiredFields = [
      "firstName",
      "surname",
      "email",
      "roomId",
      "checkInDate",
      "checkOutDate",
    ];
    const checkTheFields = requiredFields.some((feild) => !newBook[feild]);
    if (checkTheFields) {
      alert("Please fill all the fields!");
      return;
    }

    //setBooking([...bookings, newBook]);
    const newId = Math.max(...bookings.map((booking) => booking.id), 0) + 1; // add a new Id for each new customer by finding the last id and adding 1 to it
    setNewBook({ ...newBook, id: newId });
    const updatedBooking = { ...newBook, id: newId }; // adding id to the newBook (customer is being add through the form)
    addBooking(updatedBooking);

    setNewBook({
      id: "",
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
    });
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
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    setCurrentDate(formattedDate);
    setBooking(fakeBookings);
    const linkToFetch = "https://phrygian-cheddar-antler.glitch.me";
    const linkForError = "https://cyf-react.glitch.me/error";
    setIsLoading(true);
    fetch(linkToFetch)
      .then((response) => {
        if (!response.ok) {
          console.error("fetch wasn't document, an error happened");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setBooking(data);
      })
      .catch((error) => {
        console.log("Error Happened while fetching ---------------", error);
        setIsLoading(false);
        setFetchError(true);
      });
  }, []);
  return (
    <main className="bookings">
      {fetchError && (
        <Modal
          isOpen={fetchError}
          content={"Error happened! pls reload the page or try again later!"}
          onClose={() => setFetchError(false)}
        />
      )}
      {isLoading && (
        <Modal isOpen={isLoading} content={"Data is loading ..."} />
      )}
      <>
        <div className="form-container">
          <form
            onSubmit={(e) => {
              addNewBook(e);
            }}
          >
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
              type="date"
              min={currentDate}
              id="checkInDate"
              onChange={(e) => {
                handleInput(e);
              }}
              value={newBook.checkInDate}
            ></input>
            <label htmlFor="checkOutDate">CheckOut Date</label>
            <input
              type="date"
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
      </>
      {/* <div className="form-container">
        <form
          onSubmit={(e) => {
            addNewBook(e);
          }}
        >
          {/* <label htmlFor="id">ID</label>
          <input
            type="number"
            id="id"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.id}
          ></input> */}
      {/* <label htmlFor="title">Title</label>
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
            type="date"
            min={currentDate}
            id="checkInDate"
            onChange={(e) => {
              handleInput(e);
            }}
            value={newBook.checkInDate}
          ></input>
          <label htmlFor="checkOutDate">CheckOut Date</label>
          <input
            type="date"
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
      <SearchResults results={bookings} /> */}{" "}
    </main>
  );
};

export default Bookings;
