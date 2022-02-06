import { useEffect, useState } from 'react';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const getUsefulDate = (date) => {
  if (date === null) return '';
  return date.toString().split(' ').slice(1, 4).join(' ');
};

function addDays(date, days) {
  let result = date;
  result.setDate(result.getDate() + days);
  return result;
}

const OfferForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [guideLanguages, setGuideLanguages] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getOptions = async () => {
      const response = await fetch(
        'https://at-least-4-characters-long-default-rtdb.europe-west1.firebasedatabase.app/travelAgency/packageOptions.json'
      );
      const data = await response.json();

      setGuideLanguages(data.guideLanguages);
      setLocations(data.locations);
    };
    getOptions();
  }, []);

  return (
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
            defaultValue={
              startDate
                ? `${getUsefulDate(startDate)} - ${getUsefulDate(endDate)}`
                : ''
            }
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select id="location" required>
            {locations.map((location) => (
              <option value={location} key={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guideLanguage">Tour Guide Language</label>
          <select id="guideLanguage" required>
            {guideLanguages.map((language) => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div>
          {isLoading ? <p>Sending request...</p> : <button>Book</button>}
        </div>
      </form>
    </section>
  );
};

export default OfferForm;
