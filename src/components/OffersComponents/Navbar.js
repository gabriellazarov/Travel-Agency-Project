import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.list}>
      <ul>
        <li>
          <Link to={'/offers'} style={{ textDecoration: 'none' }}>
            <span>Offers</span>
          </Link>
        </li>
        <li>
          <Link to={'/login'} style={{ textDecoration: 'none' }}>
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to={'/register'} style={{ textDecoration: 'none' }}>
            <span>Register</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
