import "./Card.scss";

// const Card = ({ title, url, image }) => {
//   return (

//   );
// };
const Card = ({ title, url, image }) => (
  <>
    <h1>{title}</h1>
    <a href={url}>
      <img src={image} alt="alt text for Card component" />
    </a>
  </>
);

export default Card;
