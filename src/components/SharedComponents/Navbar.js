import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.list}>
      <ul>
        <li className={classes.firstLiEL}>
          <Link to={'/offers'} style={{ textDecoration: 'none' }}>
            <span>Offers</span>
          </Link>
        </li>
        <li>
          <Link to={'/auth'} style={{ textDecoration: 'none' }}>
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
