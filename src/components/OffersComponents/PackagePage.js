import { useContext } from 'react';
import { useParams, Redirect } from 'react-router';


import classes from './PackagePage.module.css';
import PackageContext from '../../store/offer-context';
import OfferForm from './OfferForm';



//ADD LOGIC TO NAVIGATE AUTOMATICALLY TO LOGIN/REGISTER PAGE IF A REQUEST IS SENT AND WHEN ONE OF THE OPERATIONS IS DONE NAVIGATE AUTOMATICALLY BACK WITH SAVED INPUTS
const PackagePage = () => {
  const packageCtx = useContext(PackageContext);

  const urlOffer = useParams().package;
  const loadingPackages = packageCtx.packages.length > 0;

  if (loadingPackages && !packageCtx.isValidOffer(urlOffer)) {
    return <Redirect to={'/introduction'} />;
  }

  const chosenOffer = packageCtx.packages.find(
    (offer) => offer.title === urlOffer
  );

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
          <OfferForm />
        </>
      )}
    </>
  );
};

export default PackagePage;
