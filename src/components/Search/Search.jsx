import "./Search.scss";
import SearchButon from "../SearchButton/SearchButton";
import { useState } from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e) => setSearchInput(e.target.value);
  return (
    <>
      <section className="search">
        <header className="search__header">
          <h4 className="search__heading heading">Search Bookings</h4>
        </header>
        <form
          className="search__form"
          onSubmit={(e) => {
            e.preventDefault();
            props.search(searchInput);
          }}
        >
          <label className="search__label" htmlFor="customerName">
            &rarr;
          </label>
          <input
            type="search"
            id="customerName"
            className="search__input"
            placeholder="Customer name"
            value={searchInput}
            onChange={(e) => {
              handleInput(e);
              console.log(searchInput);
            }}
          />
          <SearchButon />
        </form>
      </section>
    </>
  );
};

export default Search;
