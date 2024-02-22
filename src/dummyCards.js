import { nanoid } from "nanoid";
import bitLogo from "./assets/logo/BitcoinLogo.svg";
import blockC from "./assets/logo/blockC.svg";
import ninjaB from "./assets/logo/ninjaB.svg";
import evilC from "./assets/logo/evilC.svg";

const cardDetails = [
  {
    cardNumber: "1234 5678 9101 1123",
    cardholderName: "Christoffer Wallenberg",
    expiryDate: "12/22",
    logo: bitLogo,
    id: nanoid(),
    backgroundColor: "#ffb342",
  },
  {
    cardNumber: "6666 6666 6666 6666",
    cardholderName: "Linus Hallberg",
    expiryDate: "10/23",
    logo: blockC,
    id: nanoid(),
    backgroundColor: "#323232",
  },
  {
    cardNumber: "3333 3333 3333 3333",
    cardholderName: "Henrik Grönberg",
    expiryDate: "8/23",
    logo: ninjaB,
    id: nanoid(),
    backgroundColor: "#7E50E3",
  },
  {
    cardNumber: "1337 1337 1337 1337",
    cardholderName: "Jens Grönberg",
    expiryDate: "8/23",
    logo: evilC,
    id: nanoid(),
    backgroundColor: "#E33050",
  },
];

export default cardDetails;
