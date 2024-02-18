import "./Card.scss";

const Card = ({
  cardNumber,
  cardholderName,
  expiryDate,
  logo,
  index,
  backgroundColor,
  fontColor,
  changeMainCard,
  id,
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: backgroundColor,
        top: index ? `${index * 3}rem` : "",
        color: fontColor ? fontColor : "black",
      }}
      onClick={() => changeMainCard(id)}
    >
      <section className="wrapperLogo">
        <section>
          <img src="src/assets/noun_wifi_159786 1.svg" alt="Wifi symbol"></img>
        </section>
        <img src={logo} alt=""></img>
      </section>

      <img
        className="imgChip"
        src="src/assets/chip.svg"
        alt="chip symbol"
      ></img>
      <div className="cardNumber">{cardNumber}</div>
      <section className="bottom">
        <div className="wrapperName">
          <div className="cardName">
            <p>CARDHOLDER NAME</p>
            <span className="cardholderName">{cardholderName}</span>
          </div>
        </div>
        <div className="wapperDate">
          <div className="cardDate">
            <p>VALID THRU</p>
            <span className="expiryDate">{expiryDate}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
