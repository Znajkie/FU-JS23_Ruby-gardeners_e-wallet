import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Home = ({ cardDetails, setMainCard, mainCard }) => {
  const changeMainCard = (id) => {
    const newCard = cardDetails.find((item) => item.id === id);
    setMainCard(newCard);
  };

  const navigate = useNavigate();
  return (
    <main>
      <h1>E-WALLET</h1>
      <p>ACTIVE CARD</p>
      <Card {...mainCard} />
      <section
        className="cards"
        style={{
          height: `${15.063 + 3 * (cardDetails.length - 2)}rem`,
          width: "100%",
          cursor: "pointer",
        }}
      >
        {cardDetails
          .filter((item) => item.id !== mainCard.id)
          .map((item, index) => (
            <Card
              key={item.id}
              {...item}
              index={index}
              fontColor="white"
              changeMainCard={changeMainCard}
            />
          ))}
      </section>
      <button className="newCard" onClick={() => navigate("/addCard")}>
        ADD NEW A CARD
      </button>
    </main>
  );
};
export default Home;
