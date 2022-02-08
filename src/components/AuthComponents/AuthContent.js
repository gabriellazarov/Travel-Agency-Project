import { useContext, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import AuthContext from '../../store/auth-context';

import classes from './AuthContent.module.css';

const AuthContent = () => {
  const location = useLocation().state;

  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnKBr3eGHh5wUKiKclm4lUoxmOSxpjpJA';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnKBr3eGHh5wUKiKclm4lUoxmOSxpjpJA';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        authCtx.login(data.idToken, data.email, expirationTime.toISOString());

        if (location && location.from)
          return history.replace({
            pathname: location.from,
            state: {
              from: history.location.pathname,
              input: location.input,
              startDate: location.startDate,
              endDate: location.endDate,
            },
          });
        return history.replace('/offers');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <div className={classes.actions}>
            {isLoading ? (
              <p>Sending request...</p>
            ) : (
              <button>{isLogin ? 'Login' : 'Create Account'}</button>
            )}

            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthContent;
