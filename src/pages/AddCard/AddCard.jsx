import Card from "../../components/Card/Card";
import "./addCard.scss";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../components/Card/DropDownMenu/DropDownMenu";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCard = ({ data, setData }) => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardHolderName, setCardHolderName] = useState("FIRSTNAME LASTNAME");
  const [validThru, setvalidThru] = useState("MM/YY");
  const [ccv, setCcv] = useState("CCV");
  const [vendor, setVendor] = useState("");
  const [bgColor, setBgColor] = useState("#DCDCDC");
  const [logo, setLogo] = useState("");

  const defaultValues = {
    cardNumber: cardNumber,
    cardholderName: cardHolderName,
    expiryDate: validThru,
    logo: logo,
    id: nanoid(),
    backgroundColor: bgColor,
  };

  return (
    <main>
      <div className="add-card__exit-btn" onClick={() => navigate('/')}>
        <FaTimes />
      </div>
      <h1 className="add-card__title">
        ADD A NEW
        <br />
        BANK CARD
      </h1>
      <p className="add-card__subtitle">NEW CARD</p>
      <Card {...defaultValues} vendor={vendor} />
      <form
        id="add-card__form"
        onSubmit={(e) => {
          e.preventDefault();
          if (vendor === '') {
            toast.error('PLEASE CHOOSE A VENDOR!');
            return;
          }
          setData([...data, defaultValues]);
          navigate('/');
        }}
      >
        {/* Number */}
        <div className="form--inputs">
          <label className="form--label" htmlFor="cardNumber">
            CARD NUMBER
          </label>
          <input
            onChange={(e) => {
              if (e.target.value === '') {
                setCardNumber('XXXX XXXX XXXX XXXX');
                return;
              }
              const input = e.target.value.replace(/\D/g, '');
              const formattedInput = input.replace(
                /\B(?=(\d{4})+(?!\d))/g,
                ' '
              );
              setCardNumber(formattedInput);
            }}
            value={cardNumber === 'XXXX XXXX XXXX XXXX' ? '' : cardNumber}
            type="text"
            maxLength={19}
            id="cardNumber"
            placeholder="XXXX XXXX XXXX XXXX"
            pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
            required
          />
        </div>
        {/* Name */}
        <div className="form--inputs">
          <label className="form--label" htmlFor="cardHolderName">
            CARDHOLDER NAME
          </label>
          <input
            onChange={(e) => {
              if (e.target.value === '') {
                setCardHolderName('FIRSTNAME LASTNAME');
                return;
              }
              const input = e.target.value.replace(/[0-9]/g, '');
              defaultValues.cardholderName = input.toUpperCase();
              setCardHolderName(input.toUpperCase());
            }}
            value={
              cardHolderName === 'FIRSTNAME LASTNAME' ? '' : cardHolderName
            }
            type="text"
            id="cardHolderName"
            placeholder="FIRSTNAME LASTNAME"
            pattern="[a-zA-ZÄÅÖäåö ]{4,23}"
            required
          />
        </div>
        {/* Expire Date */}
        <section className="form__bottom-container">
          <div className="form--inputs">
            <label className="form--label" htmlFor="validThru">
              VALID THRU
            </label>
            <input
              onChange={(e) => {
                setvalidThru(e.target.value);
                defaultValues.validThru = e.target.value;
              }}
              value={validThru === 'YY/MM' ? '' : validThru}
              placeholder="MM/YY"
              type="text"
              id="validThru"
              maxLength={5}
              pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
              required
            />
          </div>
          {/* Card verification value */}
          <div className="form--inputs">
            <label className="form--label" htmlFor="ccv">
              CCV
            </label>
            <input
              maxLength={3}
              onChange={(e) => {
                if (e.target.value === '') {
                  setCcv('CCV');
                  return;
                }
                const input = e.target.value.replace(/\D/g, '');
                setCcv(input);
                defaultValues.CCV = input;
              }}
              value={ccv === 'CCV' ? '' : ccv}
              placeholder="123"
              type="text"
              id="ccv"
              pattern="[0-9]{3}"
              required
            />
          </div>
        </section>
        {/* Vendor */}
        <div className="form--inputs" style={{ marginBottom: '3rem' }}>
          <label className="form--label" htmlFor="vendor">
            VENDOR
          </label>
          <div className="dropdown-container">
            <DropdownMenu {...{ setBgColor, setLogo, setVendor }} />
          </div>
        </div>
        <button className="add-card__submit-btn" type="submit">
          ADD CARD
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={2000} />
    </main>
  );
};
export default AddCard;
