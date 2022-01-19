import classes from './OfferPackages.module.css';

const DUMMY_PACKAGES = [
  {
    title: 'Basic',
    benefits: ['a', 'b'],
    img_url: '',
  },
  {
    title: 'Premium',
    benefits: ['a', 'b'],
    img_url: '',
  },
  {
    title: 'Deluxe',
    benefits: ['a', 'b'],
    img_url:
      'https://cdn.pixabay.com/photo/2017/05/11/23/21/mount-fuji-2305606_960_720.jpg',
  },
];

const OfferPackages = () => {
  return (
    <div className={classes.container}>
      {DUMMY_PACKAGES.map((offer) => (
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
      ))}
    </div>
  );
};

export default OfferPackages;
