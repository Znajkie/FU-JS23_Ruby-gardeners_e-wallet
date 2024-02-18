import Card from "../../components/Card/Card";
import bitLogo from "../../assets/bitcoinLogo2.svg";
import blockC from "../../assets/blockC.png";
import ninjaB from "../../assets/ninjaB.png";
import evilC from "../../assets/evilC.png";
import "./AddCard.scss";
import { useState } from "react";

const AddCard = () => {
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardHolderName, setCardHolderName] = useState("FIRSTNAME LASTNAME");
  const [validThru, setvalidThru] = useState("MM/YY");
  const [ccv, setCcv] = useState("CCV");

  const defaultValues = {
    cardNumber: cardNumber,
    cardholderName: cardHolderName,
    expiryDate: "MM/YY",
    logo: "",
    id: 6,
    backgroundColor: "#DCDCDC",
  };

  return (
    <main>
      <h1>ADD A NEW BANK CARD</h1>
      <p>NEW CARD</p>
      <Card {...defaultValues} />
      <form>
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
            }}
            value={cardNumber === "XXXX XXXX XXXX XXXX" ? "" : cardNumber}
            type="text"
            maxLength={19}
            id="cardNumber"
            placeholder="XXXX XXXX XXXX XXXX"
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
              setCardHolderName(input.toUpperCase());
            }}
            value={
              cardHolderName === "FIRSTNAME LASTNAME" ? "" : cardHolderName
            }
            type="text"
            id="cardHolderName"
            placeholder="FIRSTNAME LASTNAME"
            maxLength={23}
          />
        </div>

        <div className="formWrapper">
          <div className="form--inputs">
            <label className="form--label" htmlFor="validThru">
              VALID THRU
            </label>
            <input
              // maxLength={5}
              onChange={(e) => {
                function isValidMMYY(input) {
                  var regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
                  return regex.test(input);
                }

                let inputValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                if (inputValue.length > 2) {
                  inputValue =
                    inputValue.substring(0, 2) + "/" + inputValue.substring(2); // Insert slash
                }

                // Update only if length is <= 5 to account for MM/YY and the slash
                if (
                  inputValue === "" ||
                  (isValidMMYY(inputValue) && inputValue.length <= 5)
                ) {
                  setvalidThru(inputValue.length === 5 ? inputValue : "MM/YY");
                }
              }}
              value={validThru === "MM/YY" ? "" : validThru}
              placeholder="MM/YY"
              type="text"
              id="validThru"
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
              }}
              value={ccv === "CCV" ? "" : ccv}
              placeholder="123"
              type="text"
              id="ccv"
            />
          </div>
        </div>
        <div className="form--inputs">
          <label className="form--label" htmlFor="vendor">
            VENDOR
          </label>
          <select id="vendor">
            <option value=""></option>
            <option value="bitcoin">Bitcoin</option>
            <option value="blockC">Block Chain INC</option>
            <option value="ninjaB">Ninja Bank</option>
            <option value="evilC">Evil Corp</option>
          </select>
        </div>
      </form>

      <button className="addCard">ADD CARD</button>
    </main>
  );
};
export default AddCard;
