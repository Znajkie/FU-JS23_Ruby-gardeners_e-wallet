import "./Card.scss";
import "../../App.css";
import lightchip from "../../assets/logo/chip.svg";
import darkchip from "../../assets/logo/darkChip.svg";
import { FaTimes } from "react-icons/fa";
import wifiSymbol from "../../assets/logo/wifi.svg";

const Card = ({
  data,
  cardNumber,
  inCardList,
  index,
  changeMainCard,
  setData,
  cardholderName,
  expiryDate,
  logo,
  backgroundColor,
  id,
  vendor,
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: backgroundColor,
        top: inCardList ? `${index * 3}rem` : "",
        color: inCardList ? "white" : "black",
      }}
      onClick={() => (inCardList ? changeMainCard(id) : null)}
    >
      {inCardList ? (
        <div
          className="card__delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            const updatedData = data.filter((item) => item.id !== id);
            setData(updatedData);
          }}
        >
          <FaTimes />
        </div>
      ) : null}

      {/* vendor logo */}
      <section className="card__vendor-container">
        <section>
          <img src={wifiSymbol} alt="Wifi logo"></img>
        </section>
        <img src={logo} alt=""></img>
      </section>
      {/* chip logo */}
      <img
        className="card__chip"
        src={vendor === "" ? darkchip : lightchip}
        alt="chip logo"
      />
      {/* Card number */}
      <div className="card__number">{cardNumber}</div>
      {/* Bottom section with card name, and date */}
      <section className="card__bottom">
        <div className="card__name-container">
          <div className="card__name-title">
            <p>CARDHOLDER NAME</p>
            <span className="card__name">{cardholderName}</span>
          </div>
        </div>
        <div className="card__date-container">
          <div className="card__date-title">
            <p>VALID THRU</p>
            <span className="card__date">{expiryDate}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
