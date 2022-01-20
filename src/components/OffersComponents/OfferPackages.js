import { Link } from 'react-router-dom';
import classes from './OfferPackages.module.css';

const DUMMY_PACKAGES = [
  {
    title: 'Basic',
    benefits: ['a', 'b'],
    img_url: 'https://i.imgur.com/2LkEKNG.png',
  },
  {
    title: 'Premium',
    benefits: ['a', 'b'],
    img_url: 'https://i.imgur.com/3gumQSs.png',
  },
  {
    title: 'Deluxe',
    benefits: ['a', 'b'],
    img_url: 'https://i.imgur.com/EFJ5153.png',
  },
];

const OfferPackages = () => {
  return (
    <div className={classes.container}>
      {DUMMY_PACKAGES.map((offer) => (
        <Link style={{ textDecoration: 'none' }} to={`/offers/${offer.title}`}>
          <div
            className={classes.package}
            style={{ backgroundImage: `url(${offer.img_url})` }}
          >
            <div className={classes.shadow}>
              <h2>{offer.title}</h2>
              <ul>
                {offer.benefits.map((benefit) => (
                  <li>{benefit}</li>
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
