import { useContext, useState } from 'react';
import { useParams, Redirect, useHistory } from 'react-router';

import classes from './PackagePage.module.css';
import PackageContext from '../../store/offer-context';
import AuthContext from '../../store/auth-context';

import OfferForm from './OfferForm';

const PackagePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const packageCtx = useContext(PackageContext);
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const urlOffer = useParams().package;
  const loadingPackages = packageCtx.packages.length > 0;

  if (loadingPackages && !packageCtx.isValidOffer(urlOffer)) {
    return <Redirect to={'/introduction'} />;
  }

  const chosenOffer = packageCtx.packages.find(
    (offer) => offer.title === urlOffer
  );

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    console.log(event);

    if (!authCtx.isLoggedIn)
      return history.push({
        pathname: '/auth',
        state: {
          from: history.location.pathname,
        },
      });

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
            style={{ backgroundImage: `url(${chosenOffer.img_url})` }}
          >
            {chosenOffer.title} Package
          </h1>
          <OfferForm formHandler={submitHandler} isLoading={isLoading} />
        </>
      )}
    </>
  );
};

export default PackagePage;
