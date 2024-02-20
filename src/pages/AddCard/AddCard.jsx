import Card from "../../components/Card/Card";
import "./AddCard.scss";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropdownMenu from "../../components/Card/DropDownMenu/DropDownMenu";

const AddCard = ({
  cardDetails,
  data,
  setData,
  bitLogo,
  blockC,
  ninjaB,
  evilC,
}) => {
  const navigate = useNavigate();
  let newArray = [...data];
  //Gets the length of the old array of cards, to be used for the id for the new card.
  let lengthOfArray = newArray.length;
  //Local storage
  function addNewCard() {
    setData([...data, defaultValues]);
    console.log(data);
    // newArray.push(defaultValues);
    //Adds new array with cards into localstorage.
    localStorage.setItem("Localstorage", JSON.stringify(newArray));
    navigate("/");
    defaultValues.id = lengthOfArray + 1;
  }

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
    id: lengthOfArray + 1,
    backgroundColor: bgColor,
  };

  return (
    <main>
      <div
        className="exitBtn"
        onClick={() => navigate('/')}
        style={{
          color: 'black',
          cursor: 'pointer',
          position: 'relative',
          top: '2%',
          left: '95%',
        }}
      >
        <FaTimes />
      </div>
      <h1>ADD A NEW BANK CARD</h1>
      <p>NEW CARD</p>
      <Card {...defaultValues} vendor={vendor} />
      <form>
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

              //Adds cardnumber into new array
              defaultValues.cardNumber = formattedInput;
            }}
            value={cardNumber === 'XXXX XXXX XXXX XXXX' ? '' : cardNumber}
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
                setvalidThru(e.target.value);
                defaultValues.expiryDate = e.target.value;
              }}
              value={validThru === 'MM/YY' ? '' : validThru}
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
            />
          </div>
        </div>

        <div className="form--inputs">
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
                if (e.target.value === '') {
                  setBgColor('#DCDCDC');
                  setLogo('');
                }
                if (item.cardName === e.target.value) {
                  setBgColor(item.color);
                  setLogo(item.logo);
                }
              });
            }}
            id="vendor"
          >
            <option value=""></option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Block Chain INC">Block Chain INC</option>
            <option value="Ninja Bank">Ninja Bank</option>
            <option value="Evil Corp">Evil Corp</option>
          </select>
        </div>
      </form>
      <button
        className="addCard"
        onClick={() => {
          if (cardNumber === '' || cardNumber.length < 16) {
            toast('Wow so easy!');
            return;
          }

          addNewCard();
        }}
      >
        ADD CARD
      </button>
      <ToastContainer />
    </main>
  );
};
export default AddCard;
