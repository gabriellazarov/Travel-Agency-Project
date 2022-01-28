import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './Navbar.module.css';

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.list}>
      <ul>
        <li className={classes.offersLink}>
          <Link
            to={'/offers'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Offers
          </Link>
        </li>
        {authCtx.isLoggedIn ? (
          <>
            <li>
              <Link
                to={'/profile'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Profile
              </Link>
            </li>
            <li onClick={authCtx.logout}>Logout</li>
          </>
        ) : (
          <li>
            <Link
              to={'/auth'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
