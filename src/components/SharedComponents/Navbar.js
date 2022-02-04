import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './Navbar.module.css';

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.list}>
      <ul>
        <Link to={'/introduction'}>
          <li>
            <img src={'/logo.png'} alt="rip" className={classes.logo} />
            先輩
          </li>
        </Link>
        <Link to={'/offers'}>
          <li className={classes.offersLink}>Offers</li>
        </Link>
        {authCtx.isLoggedIn ? (
          <>
            <Link to={'/profile'}>
              <li>Profile</li>
            </Link>
            <li onClick={authCtx.logout}>Logout</li>
          </>
        ) : (
          <Link to={'/auth'}>
            <li>Login</li>{' '}
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
