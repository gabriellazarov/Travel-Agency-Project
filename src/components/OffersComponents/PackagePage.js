import { useState } from 'react';
import { useParams, Redirect } from 'react-router';
import Navbar from '../SharedComponents/Navbar';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

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

const getUsefulDate = (date) => {
  if (date === null) return '';
  return date.toString().split(' ').slice(1, 4).join(' ');
};

function addDays(date, days) {
  let result = date;
  result.setDate(result.getDate() + days);
  return result;
}

//ADD LOGIC TO NAVIGATE AUTOMATICALLY TO LOGIN/REGISTER PAGE IF A REQUEST IS SENT AND WHEN ONE OF THE OPERATIONS IS DONE NAVIGATE AUTOMATICALLY BACK WITH SAVED INPUTS
const PackagePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
            <label htmlFor="startingDate">Choose a Date Range</label>
            <ReactDatePicker
              selected={startDate}
              selectsRange
              inline
              startDate={startDate}
              endDate={endDate}
              onChange={onChange}
              minDate={addDays(new Date(), 7)}
              maxDate={addDays(new Date(), 365)}
            />
            <input
              value={
                startDate &&
                `${getUsefulDate(startDate)} - ${getUsefulDate(endDate)}`
              }
            />
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
