import Card from "../../components/Card/Card";
import "./AddCard.scss";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../components/Card/DropDownMenu/DropDownMenu";

const AddCard = ({ data, setData, bitLogo, blockC, ninjaB, evilC }) => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardHolderName, setCardHolderName] = useState("FIRSTNAME LASTNAME");
  const [validThru, setvalidThru] = useState("MM/YY");
  const [ccv, setCcv] = useState("CCV");
  const [vendor, setVendor] = useState("");
  const [bgColor, setBgColor] = useState("#DCDCDC");
  const [logo, setLogo] = useState("");

  const backgroundColors = [
    { cardName: "Bitcoin", color: "#ffb342", logo: bitLogo },
    {
      cardName: "Block Chain INC",
      color: "#323232",
      logo: blockC,
    },
    { cardName: "Ninja Bank", color: "#7E50E3", logo: ninjaB },
    { cardName: "Evil Corp", color: "#E33050", logo: evilC },
  ];

  const defaultValues = {
    cardNumber: cardNumber,
    cardholderName: cardHolderName,
    expiryDate: validThru,
    logo: logo,
    id: data.length + 1,
    backgroundColor: bgColor,
  };

  return (
    <main style={{ position: "relative" }}>
      <div
        className="exitBtn"
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "0.5rem",
          right: "1rem",
          fontSize: "1.5rem",
        }}
      >
        <FaTimes />
      </div>
      <h1>
        ADD A NEW
        <br />
        BANK CARD
      </h1>
      <p>NEW CARD</p>
      <Card {...defaultValues} vendor={vendor} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData([...data, defaultValues]);
          navigate("/");
        }}
      >
        <div className="form--inputs">
          <label className="form--label" htmlFor="cardNumber">
            CARD NUMBER
          </label>
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setCardNumber("XXXX XXXX XXXX XXXX");
                return;
              }
              const input = e.target.value.replace(/\D/g, "");
              const formattedInput = input.replace(
                /\B(?=(\d{4})+(?!\d))/g,
                " "
              );
              setCardNumber(formattedInput);

              //Adds cardnumber into new array
              defaultValues.cardNumber = formattedInput;
            }}
            value={cardNumber === "XXXX XXXX XXXX XXXX" ? "" : cardNumber}
            type="text"
            maxLength={19}
            id="cardNumber"
            placeholder="XXXX XXXX XXXX XXXX"
            pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
            required
          />
        </div>

        <div className="form--inputs">
          <label className="form--label" htmlFor="cardHolderName">
            CARD HOLDER NAME
          </label>
          <input
            onChange={(e) => {
              if (e.target.value === "") {
                setCardHolderName("FIRSTNAME LASTNAME");
                return;
              }
              const input = e.target.value.replace(/[0-9]/g, "");

              defaultValues.cardholderName = input.toUpperCase();
              setCardHolderName(input.toUpperCase());
            }}
            value={
              cardHolderName === "FIRSTNAME LASTNAME" ? "" : cardHolderName
            }
            type="text"
            id="cardHolderName"
            placeholder="FIRSTNAME LASTNAME"
            required
          />
        </div>

        <div className="formWrapper">
          <div className="form--inputs">
            <label className="form--label" htmlFor="validThru">
              VALID THRU
            </label>
            <input
              onChange={(e) => {
                setvalidThru(e.target.value);
                defaultValues.expiryDate = e.target.value;
              }}
              value={validThru === "MM/YY" ? "" : validThru}
              placeholder="MM/YY"
              type="text"
              id="validThru"
              maxLength={5}
              pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
              required
            />
          </div>

          <div className="form--inputs">
            <label className="form--label" htmlFor="ccv">
              CCV
            </label>
            <input
              maxLength={3}
              onChange={(e) => {
                if (e.target.value === "") {
                  setCcv("CCV");
                  return;
                }
                const input = e.target.value.replace(/\D/g, "");

                setCcv(input);
                defaultValues.CCV = input;
              }}
              value={ccv === "CCV" ? "" : ccv}
              placeholder="123"
              type="text"
              id="ccv"
              pattern="[0-9]{3}"
              required
            />
          </div>
        </div>
        <div className="form--inputs" style={{ marginBottom: "3rem" }}>
          <label className="form--label" htmlFor="vendor">
            VENDOR
          </label>
          <div className="dropdown-container">
            <DropdownMenu />
          </div>
          <select
            value={vendor}
            onChange={(e) => {
              setVendor(e.target.value);
              backgroundColors.map((item) => {
                if (e.target.value === "") {
                  setBgColor("#DCDCDC");
                  setLogo("");
                }
                if (item.cardName === e.target.value) {
                  setBgColor(item.color);
                  setLogo(item.logo);
                }
              });
            }}
            id="vendor"
            required
          >
            <option value=""></option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Block Chain INC">Block Chain INC</option>
            <option value="Ninja Bank">Ninja Bank</option>
            <option value="Evil Corp">Evil Corp</option>
          </select>
        </div>
        <button className="addCard" type="submit">
          ADD CARD
        </button>
      </form>
    </main>
  );
};
export default AddCard;
