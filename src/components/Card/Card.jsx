import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ cardDetails }) => {
  return (
    <div className="card">
      <div>{cardDetails.cardNumber}</div>
      <div>CARDHOLDER NAME: {cardDetails.cardholderName}</div>
      <div>VALID THRU: {cardDetails.expiryDate}</div>
    </div>
  );
};

Card.propTypes = {
  cardDetails: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    cardholderName: PropTypes.string.isRequired,
    ccv: PropTypes.number.isRequired,
  }),
};

export default Card;
