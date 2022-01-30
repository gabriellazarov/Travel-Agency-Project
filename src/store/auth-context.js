import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  email: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoredUser = () => {
  const storedToken = localStorage.getItem('token');
  const storedEmail = localStorage.getItem('email');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    email: storedEmail,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const userData = retrieveStoredUser();

  let initialToken;
  let initialEmail;
  if (userData) {
    initialToken = userData.token;
    initialEmail = userData.email;
  }

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, email, expirationTime) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (userData) {
      console.log(userData.duration);
      logoutTimer = setTimeout(logoutHandler, userData.duration);
    }
  }, [userData, logoutHandler]);

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
