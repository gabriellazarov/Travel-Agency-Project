import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PackageContext from '../../store/offer-context';
import classes from './OfferPackages.module.css';

const OfferPackages = () => {
  const packageCtx = useContext(PackageContext);

  const offers = packageCtx.packages;

  return (
    <div className={classes.container}>
      {offers.map((offer) => (
        <Link
          style={{ textDecoration: 'none' }}
          to={`/offers/${offer.title}`}
          key={offer.title}
        >
          <div
            className={classes.package}
            style={{ backgroundImage: `url(${offer.img_url})` }}
          >
            <div className={classes.shadow}>
              <h2>{offer.title}</h2>
              <ul>
                {offer.benefits.map((benefit) => (
                  <li key={offer.title + ' - ' + benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OfferPackages;
