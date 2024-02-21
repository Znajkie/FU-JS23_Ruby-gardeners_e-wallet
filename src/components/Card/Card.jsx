import "./Card.scss";
import chip from "../../assets/logo/chip.svg";
import darkchip from "../../assets/logo/darkChip.svg";
import { FaTimes } from "react-icons/fa";
import wifiSymbol from '../../assets/logo/wifi.svg';

const Card = ({
  cardDetails,
  cardNumber,
  cardholderName,
  expiryDate,
  logo,
  index,
  backgroundColor,
  fontColor,
  changeMainCard,
  id,
  vendor,
  setData,
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: backgroundColor,
        top: index ? `${index * 3}rem` : '',
        color: fontColor ? fontColor : 'black',
      }}
      onClick={() => (fontColor ? changeMainCard(id) : null)}
    >
      {fontColor ? (
        <div
        className="exitBtn"
          // onClick={() => {
          //   const updatedData = cardDetails.filter((item) => item.id !== id);
          //   setData(updatedData);
          //   localStorage.setItem('data', JSON.stringify(updatedData));
          // }}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '1rem',
            right: '48%',
            fontSize: '1.5rem',
          }}
        >
          <FaTimes />
        </div>
      ) : null}

      <section className="wrapperLogo">
        <section>
          <img src={wifiSymbol} alt="Wifi symbol"></img>
        </section>
        <img src={logo} alt=""></img>
      </section>

      <img
        className="imgChip"
        src={vendor === '' ? darkchip : chip}
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
