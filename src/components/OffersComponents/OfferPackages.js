import { Link } from 'react-router-dom';
import classes from './OfferPackages.module.css';

const DUMMY_PACKAGES = [
  {
    title: 'Basic',
    benefits: ['3 star lodging', 'Included breakfast', 'Up to 3 hours a day with tour guide'],
    img_url: 'https://i.imgur.com/2LkEKNG.png',
  },
  {
    title: 'Premium',
    benefits: ['4 star lodging', 'Included breakfast and dinner', 'Up to 5 hours a day with tour guide'],
    img_url: 'https://i.imgur.com/EFJ5153.png',
  },
  {
    title: 'Deluxe',
    benefits: ['5 star lodging', 'Included breakfast, dinner and room service', 'Up to 8 hours a day with tour guide'],
    img_url: 'https://i.imgur.com/3gumQSs.png',
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
