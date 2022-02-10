import { useContext, useState } from 'react';
import { useParams, Redirect, useHistory, useLocation } from 'react-router';

import classes from './PackagePage.module.css';
import PackageContext from '../../store/offer-context';
import AuthContext from '../../store/auth-context';

import OfferForm from './OfferForm';

const PackagePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const packageCtx = useContext(PackageContext);
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  let savedData = {};
  const location = useLocation().state;
  if (location && location.from === '/introduction') {
    savedData.input = location.input;
    savedData.startDate = location.startDate;
    savedData.endDate = location.endDate;
  }

  if (packageCtx.packages.length === 0) history.replace('/offers');

  const [chosenLocation, setChosenLocation] = useState(
    savedData.hasOwnProperty('input')
      ? savedData.input.location
      : packageCtx.options.locations[0].name
  );

  const urlOffer = useParams().package;
  const loadingPackages = packageCtx.packages.length > 0;

  if (loadingPackages && !packageCtx.isValidOffer(urlOffer)) {
    return <Redirect to={'/introduction'} />;
  }

  const chosenOffer = packageCtx.packages.find(
    (offer) => offer.title === urlOffer
  );

  const submitHandler = async (inputRefs, startDate, endDate) => {
    setIsLoading(true);

    const input = {
      date: inputRefs.date.current.value,
      location: inputRefs.location.current.value,
      language: inputRefs.language.current.value,
      type: chosenOffer.title,
    };

    if (!authCtx.isLoggedIn)
      return history.push({
        pathname: '/auth',
        state: {
          from: history.location.pathname,
          input: input,
          startDate: startDate,
          endDate: endDate,
        },
      });

    if (!input.date || !input.location || !input.language) {
      setIsLoading(false);
      return alert('All fields must be filled!');
    }

    const userEndpoint = authCtx.email.split('.').join('-');

    const response = await fetch(
      `https://at-least-4-characters-long-default-rtdb.europe-west1.firebasedatabase.app/travelAgency/userBookings/${userEndpoint}.json`,
      {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response;

    if (!data.ok) return alert('Something went wrong!');

    return history.push('/profile');
  };

  return (
    <>
      {!loadingPackages ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1
            className={classes.header}
            style={{
              backgroundImage: `url(${packageCtx.getLocationImgUrl(
                chosenLocation
              )})`,
            }}
          >
            {chosenOffer.title} Package
          </h1>
          <OfferForm
            formHandler={submitHandler}
            isLoading={isLoading}
            savedData={savedData}
            guideLanguages={packageCtx.options.guideLanguages}
            locations={packageCtx.options.locations}
            setChosenLocation={setChosenLocation}
          />
        </>
      )}
    </>
  );
};

export default PackagePage;
