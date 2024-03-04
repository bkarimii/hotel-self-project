import "./Search.scss";
import SearchButon from "../SearchButton/SearchButton";

const Search = () => (
  <section className="search">
    <header className="search__header">
      <h4 className="search__heading heading">Search Bookings</h4>
    </header>
    <form className="search__form">
      <label className="search__label" htmlFor="customerName">
        &rarr;
      </label>
      <input
        type="search"
        id="customerName"
        className="search__input"
        placeholder="Customer name"
      />
      <SearchButon />
    </form>
  </section>
);

export default Search;
