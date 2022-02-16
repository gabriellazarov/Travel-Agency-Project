import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './UserProfilePage.module.css';

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

  console.log(bookings);
  return (
    <>
      <p>hello, {authCtx.email}</p>
      <div className={classes.bookingContainer}>
        {bookings.map((booking) => (
          <div
            key={booking.keyId}
            style={{
              backgroundImage: `url(${booking.location.imgUrl})`,
            }}
            className={classes.booking}
          >
            <h2>
              {booking.type} trip to {booking.location.name}
            </h2>
            <p className={classes.date}>{booking.date}</p>
            <p className={classes.guide}>Guide Language: {booking.language}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserProfile;
