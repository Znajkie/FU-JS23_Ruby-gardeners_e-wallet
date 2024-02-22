import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Home = ({ data, setMainCard, mainCard, setData }) => {
  const changeMainCard = (id) => {
    const newCard = data.find((item) => item.id === id);
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
          height: `${15.063 + 3 * (data.length - 2)}rem`,
        }}
      >
        {data
          .filter((item) => item.id !== mainCard.id)
          .map((item, index) => (
            <Card
              key={item.id}
              {...item}
              index={index}
              inCardList={true}
              changeMainCard={changeMainCard}
              setData={setData}
              data={data}
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
