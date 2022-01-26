import { useParams, Redirect } from 'react-router';
import Navbar from '../SharedComponents/Navbar';

//this should be in a global store at some point
const DUMMY_VALID_OFFERS = [
  {
    title: 'Basic',
    benefits: [
      '3 star lodging',
      'Included breakfast',
      'Up to 3 hours a day with tour guide',
    ],
    img_url: 'https://i.imgur.com/2LkEKNG.png',
  },
  {
    title: 'Premium',
    benefits: [
      '4 star lodging',
      'Included breakfast and dinner',
      'Up to 5 hours a day with tour guide',
    ],
    img_url: 'https://i.imgur.com/EFJ5153.png',
  },
  {
    title: 'Deluxe',
    benefits: [
      '5 star lodging',
      'Included breakfast, dinner and room service',
      'Up to 8 hours a day with tour guide',
    ],
    img_url: 'https://i.imgur.com/3gumQSs.png',
  },
];

const PackagePage = () => {
  const chosenOffer = useParams().package;
  if (
    !DUMMY_VALID_OFFERS.map((offer) => offer.title).includes(chosenOffer)
  ) {
    return <Redirect to={'/introduction'} />;
  }

  return (
    <>
      <Navbar />
      <h1>{chosenOffer} Package</h1>
    </>
  );
};

export default PackagePage;
