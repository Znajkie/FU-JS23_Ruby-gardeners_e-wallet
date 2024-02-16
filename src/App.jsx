import React from 'react';
import Card from './components/Card/Card';
import { useState } from 'react';
import bitLogo from './assets/BitcoinLogo.svg';
import blockC from './assets/blockC.svg';
import ninjaB from './assets/ninjaB.svg';
import evilC from './assets/evilC.svg';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  // RouteProvider,
} from 'react-router-dom';
import AddCard from './pages/AddCard/AddCard';

const cardDetails = [
  {
    cardNumber: '1234 5678 9101 1123',
    cardholderName: 'Christoffer Wallenberg',
    expiryDate: '12/22',
    logo: bitLogo,
    id: 1,
    backgroundColor: '#ffb342',
  },
  {
    cardNumber: '6666 6666 6666 6666',
    cardholderName: 'Linus Hallberg',
    expiryDate: '10/23',
    logo: blockC,
    id: 2,
    backgroundColor: '#323232',
  },
  {
    cardNumber: '3333 3333 3333 3333',
    cardholderName: 'Henrik Grönberg',
    expiryDate: '8/23',
    logo: ninjaB,
    id: 3,
    backgroundColor: '#7E50E3',
  },
  {
    cardNumber: '1337 1337 1337 1337',
    cardholderName: 'Jens Grönberg',
    expiryDate: '8/23',
    logo: evilC,
    id: 4,
    backgroundColor: '#E33050',
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/addcard" element={<AddCard />} />
    </Route>
  )
);

const App = () => {
  const [data, setData] = useState(cardDetails);

  return <AddCard cardDetails={data} />;
};

export default App;

