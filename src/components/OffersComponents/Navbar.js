import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.list}>
      <ul>
        <li>
          <span>Offers</span>
        </li>
        <li>
          <span>Login</span>
        </li>
        <li>
          <span>Register</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
