import React from 'react';
import Card from '../../components/Card/Card';
import './AddCard.scss';

const AddCard = ({ cardDetails }) => {
  const firstCard = cardDetails[0];
  return (
    <main>
      <h1>E-WALLET</h1>
      <p>ACTIVE CARD</p>
      <Card {...firstCard} />
      <section
        className="cards"
        style={{
          height: `${15.063 + 3 * (cardDetails.length - 2)}rem`,
          width: '100%',
        }}
      >
        {cardDetails.slice(1, cardDetails.length).map((item, index) => (
          <Card key={item.id} {...item} index={index} fontColor="white" />
        ))}
      </section>
      <button className="addCard">ADD NEW A CARD</button>
    </main>
  );
};
export default AddCard;
