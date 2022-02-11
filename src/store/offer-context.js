import React, { useState, useEffect } from 'react';

const PackageContext = React.createContext({
  packages: [],
  isValidOffer: (urlOffer) => {},
});

const transformPackages = (packages) => {
  const transformedPackages = [];
  for (const pckg in packages) {
    const newPackage = {
      title: pckg,
      benefits: packages[pckg].benefits,
      img_url: packages[pckg].img_url,
    };
    transformedPackages.push(newPackage);
  }
  return transformedPackages;
};

export const PackageContextProvider = (props) => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const getOffers = async () => {
      const response = await fetch(
        'https://at-least-4-characters-long-default-rtdb.europe-west1.firebasedatabase.app/travelAgency/offerPackages.json'
      );
      const data = await response.json();

      setPackages(transformPackages(data));
    };

    getOffers();
  }, []);

  const isValidOffer = (urlOffer) => {
    const validOffers = packages.map((offer) => offer.title);

    return validOffers.includes(urlOffer);
  };

  const contextValue = {
    packages: packages,
    isValidOffer: isValidOffer,
  };
  return (
    <PackageContext.Provider value={contextValue}>
      {props.children}
    </PackageContext.Provider>
  );
};

export default PackageContext;
