import React from "react";
import { useState } from "react";
import bitLogo from "./assets/BitcoinLogo.svg";
import blockC from "./assets/blockC.svg";
import ninjaB from "./assets/ninjaB.svg";
import evilC from "./assets/evilC.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCard from "./pages/AddCard/AddCard";

const cardDetails = [
  {
    cardNumber: "1234 5678 9101 1123",
    cardholderName: "Christoffer Wallenberg",
    expiryDate: "12/22",
    logo: bitLogo,
    id: 1,
    backgroundColor: "#ffb342",
  },
  {
    cardNumber: "6666 6666 6666 6666",
    cardholderName: "Linus Hallberg",
    expiryDate: "10/23",
    logo: blockC,
    id: 2,
    backgroundColor: "#323232",
  },
  {
    cardNumber: "3333 3333 3333 3333",
    cardholderName: "Henrik Grönberg",
    expiryDate: "8/23",
    logo: ninjaB,
    id: 3,
    backgroundColor: "#7E50E3",
  },
  {
    cardNumber: "1337 1337 1337 1337",
    cardholderName: "Jens Grönberg",
    expiryDate: "8/23",
    logo: evilC,
    id: 4,
    backgroundColor: "#E33050",
  },
];

const App = () => {
  const storedData = JSON.parse(localStorage.getItem("data"));
  const storedMainCard = JSON.parse(localStorage.getItem("mainCard"));

  const [data, setData] = useState(storedData ? storedData : cardDetails);
  const [mainCard, setMainCard] = useState(
    storedMainCard ? storedMainCard : data[0]
  );

  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("mainCard", JSON.stringify(mainCard));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cardDetails={data}
              setData={setData}
              mainCard={mainCard}
              setMainCard={setMainCard}
            />
          }
        />
        <Route
          path="/addCard"
          element={
            <AddCard
              cardDetails={data}
              {...{ bitLogo, blockC, ninjaB, evilC, setData, data }}
            />
          }
        />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </Router>
  );
};

export default App;
