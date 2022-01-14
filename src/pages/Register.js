import { Link } from 'react-router-dom';
import Navbar from '../components/OffersComponents/Navbar';

import classes from './Auth.module.css';

const Register = () => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <p>Already have an account?</p>
        <p>
          <Link to={'/login'}>
            <button className={classes.button}>Login</button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
