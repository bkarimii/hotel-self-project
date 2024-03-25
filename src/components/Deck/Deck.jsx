import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
  // you will need to map over the cardsData array and render a Card component for each card object
  // how will you pass props to the Card component?
  const deckCards = cardsData.map((card, index) => (
    <li key={index}>
      <Card title={card.title} url={card.url} image={card.image} />
    </li>
  ));
  return (
    <>
      <ul>{deckCards}</ul>
    </>
  );
};

export default Deck;
