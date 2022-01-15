import { Link } from 'react-router-dom';
import Navbar from '../SharedComponents/Navbar';

import classes from './AuthContent.module.css';

const AuthContent = (props) => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        {props.isLogin ? (
          <>
            <p>Don't have an account?</p>
            <p>
              <Link to={'/register'}>
                <button className={classes.button}>Register</button>
              </Link>
            </p>
          </>
        ) : (
          <>
            <p>Already have an account?</p>
            <p>
              <Link to={'/login'}>
                <button className={classes.button}>Login</button>
              </Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default AuthContent;
