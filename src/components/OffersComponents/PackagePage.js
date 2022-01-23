import { useParams, Redirect } from 'react-router';
import Navbar from '../SharedComponents/Navbar';

//this should be in a global store at some point
const DUMMY_VALID_OFFERS = ['Basic', 'Premium', 'Deluxe'];

const PackagePage = () => {
  const chosenOffer = useParams().package;
  if (!DUMMY_VALID_OFFERS.includes(chosenOffer)) {
    return <Redirect to={'/introduction'} />;
  }

  return (
    <>
      <Navbar />
      <p>{chosenOffer}</p>
    </>
  );
};

export default PackagePage;
