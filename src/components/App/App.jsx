import "bootstrap/dist/css/bootstrap.min.css";
import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader";
import Deck from "../Deck/Deck";
import Footer from "../Footer/Footer";
import Restaurant from "../Restaurant/Restaurant";

const App = () => {
  const footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  return (
    <div className="app">
      <AppHeader />
      <Deck />
      <Bookings />
      <Restaurant />
      <Footer data={footerArray} />
    </div>
  );
};

export default App;
// test comment
