import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader";
import Deck from "../Deck/Deck";

const App = () => (
  <div className="app">
    <AppHeader />
    <Deck />
    <Bookings />
  </div>
);

export default App;
// test comment
