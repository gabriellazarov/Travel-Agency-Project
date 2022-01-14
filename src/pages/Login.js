import { Link } from 'react-router-dom';
import Navbar from '../components/OffersComponents/Navbar';

import classes from './Auth.module.css';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <p>Don't have an account?</p>
        <p>
          <Link to={'/register'}>
            <button className={classes.button}>Register</button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
