import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddCard from "./pages/AddCard/AddCard";
import "./App.css";
import cardDetails from "./dummyCards";

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
              data={data}
              setData={setData}
              mainCard={mainCard}
              setMainCard={setMainCard}
            />
          }
        />
        <Route path="/addCard" element={<AddCard {...{ setData, data }} />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </Router>
  );
};

export default App;
