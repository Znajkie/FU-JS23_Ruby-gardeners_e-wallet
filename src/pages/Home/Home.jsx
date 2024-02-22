import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Home = ({ cardDetails, setMainCard, mainCard, setData }) => {
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
          minHeight: "21rem",
          marginTop: "2.5rem",
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
              setData={setData}
              cardDetails={cardDetails}
            />
          ))}
      </section>
      {/* <div className="newCardContainer"> */}
      <button className="newCard" onClick={() => navigate("/addCard")}>
        ADD NEW A CARD
      </button>
      {/* </div> */}
    </main>
  );
};
export default Home;
