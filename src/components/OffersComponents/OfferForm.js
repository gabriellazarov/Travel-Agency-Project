import { useEffect, useRef, useState } from 'react';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import classes from './OfferForm.module.css';

const getUsefulDate = (date) => {
  if (date === null) return '';
  return date.toString().split(' ').slice(1, 4).join(' ');
};

function addDays(date, days) {
  let result = date;
  result.setDate(result.getDate() + days);
  return result;
}

const OfferForm = (props) => {
  const initialData = {
    startDate: null,
    endDate: null,
    location: undefined,
    language: undefined,
  };

  if (props.savedData.hasOwnProperty('startDate')) {
    initialData.startDate = props.savedData.startDate;
    initialData.endDate = props.savedData.endDate;
    initialData.location = props.savedData.input.location;
    initialData.language = props.savedData.input.language;
  }

  const [startDate, setStartDate] = useState(initialData.startDate);
  const [endDate, setEndDate] = useState(initialData.endDate);
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

  const dateInputRef = useRef();

  const locationInputRef = useRef();

  const languageInputRef = useRef();

  const inputRefs = {
    date: dateInputRef,
    location: locationInputRef,
    language: languageInputRef,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.formHandler(inputRefs, startDate, endDate);
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <div>
          Choose a Date Range
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
            readOnly
            value={
              startDate
                ? `${getUsefulDate(startDate)} - ${getUsefulDate(endDate)}`
                : ''
            }
            required
            ref={dateInputRef}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select id="location" required ref={locationInputRef}>
            {locations.map((location) => (
              <option
                value={location}
                key={location}
                selected={initialData.location === location}
              >
                {location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guideLanguage">Tour Guide Language</label>
          <select id="guideLanguage" required ref={languageInputRef}>
            {guideLanguages.map((language) => (
              <option
                value={language}
                key={language}
                selected={initialData.language === language}
              >
                {language}
              </option>
            ))}
          </select>
        </div>
        <div>
          {props.isLoading ? <p>Sending request...</p> : <button>Book</button>}
        </div>
      </form>
    </section>
  );
};

export default OfferForm;
