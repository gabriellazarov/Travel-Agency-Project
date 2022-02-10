import { useRef, useState } from 'react';

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

  const setLocation = (event) => {
    props.setChosenLocation(event.target.value);
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
          <select
            id="location"
            required
            ref={locationInputRef}
            onChange={setLocation}
          >
            {props.locations.map((location) => (
              <option
                value={location.name}
                key={location.name}
                selected={initialData.location === location.name}
              >
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guideLanguage">Tour Guide Language</label>
          <select id="guideLanguage" required ref={languageInputRef}>
            {props.guideLanguages.map((language) => (
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
