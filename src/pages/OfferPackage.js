import { useParams, Redirect } from 'react-router';

//this should be in a global store at some point
const DUMMY_VALID_OFFERS = ['Basic', 'Premium', 'Deluxe'];

const OfferPackage = () => {
  const chosenOffer = useParams().package;
  if (!DUMMY_VALID_OFFERS.includes(chosenOffer)) {
    return <Redirect to={'/introduction'} />;
  }

  return <p>{chosenOffer}</p>;
};

export default OfferPackage;
