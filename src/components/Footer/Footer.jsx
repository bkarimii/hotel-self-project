const Footer = ({ data }) => (
  <>
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
);

export default Footer;
