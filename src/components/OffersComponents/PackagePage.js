import { useState } from 'react';
import { useParams, Redirect } from 'react-router';
import Navbar from '../SharedComponents/Navbar';

import classes from './PackagePage.module.css';

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

//ADD LOGIC TO NAVIGATE AUTOMATICALLY TO LOGIN/REGISTER PAGE IF A REQUEST IS SENT AND WHEN ONE OF THE OPERATIONS IS DONE NAVIGATE AUTOMATICALLY BACK WITH SAVED INPUTS
const PackagePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const chosenOffer = useParams().package;

  if (!DUMMY_VALID_OFFERS.map((offer) => offer.title).includes(chosenOffer)) {
    return <Redirect to={'/introduction'} />;
  }

  return (
    <>
      <Navbar />
      <h1 className={classes.header}>{chosenOffer} Package</h1>

      <section>
        <form>
          <div>
            <label htmlFor="startingDate">Choose a Starting Date</label>
            <input type="date" id="startingDate" required />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select id="location" required>
              <option value="tokyo">Tokyo</option>
              <option value="kyoto">Kyoto</option>
              <option value="osaka">Osaka</option>
              <option value="okinawa">Okinawa</option>
            </select>
          </div>
          <div className={classes.actions}>
            {isLoading ? <p>Sending request...</p> : <button>Book</button>}
          </div>
        </form>
      </section>
    </>
  );
};

export default PackagePage;
