import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';
import PackageContext from '../../store/offer-context';

const monthToNumber = (month) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return months.indexOf(month);
};

const dateSorter = (a, b) => {
  const dateA = a.split(' - ')[0].split(' ');
  const dateB = b.split(' - ')[0].split(' ');

  if (dateA[2] !== dateB[2]) {
    if (dateA[2] > dateB[2]) return 1;
    return -1;
  }

  if (monthToNumber(dateA) !== monthToNumber(dateB)) {
    if (monthToNumber(dateA) > monthToNumber(dateB)) return 1;
    return 0;
  }

  if (dateA[1] !== dateB[1]) {
    if (dateA[1] > dateB[1]) return 1;
    return -1;
  }
  return 0;
};

const UserProfile = () => {
  const [bookings, setBookings] = useState([]);

  const authCtx = useContext(AuthContext);
  const packageCtx = useContext(PackageContext);

  useEffect(() => {
    const getAndSetBookings = async () => {
      const userEndpoint = authCtx.email.split('.').join('-');

      const response = await fetch(
        `https://at-least-4-characters-long-default-rtdb.europe-west1.firebasedatabase.app/travelAgency/userBookings/${userEndpoint}.json`
      );

      const data = await response.json();

      const transformedData = [];

      for (const booking in data) {
        transformedData.push(data[booking]);
      }

      for (let i = 0; i < transformedData.length; i++) {
        transformedData[i].keyId = i;
      }

      setBookings(transformedData.sort((a, b) => dateSorter(a.date, b.date)));
    };

    getAndSetBookings();
  }, [authCtx.email]);

  const history = useHistory();
  if (!packageCtx.options.hasOwnProperty('locations'))
    history.replace('/offers');

  return (
    <>
      <p>hello, {authCtx.email}</p>
      <div>
        {bookings.map((booking) => (
          <div key={booking.keyId}>
            <h2
              style={{
                backgroundImage: `url(${packageCtx.getLocationImgUrl(
                  booking.location
                )})`,
              }}
            >
              {booking.type} trip to {booking.location}
            </h2>
            <p>{booking.date}</p>
            <p>Guide Language: {booking.language}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserProfile;
