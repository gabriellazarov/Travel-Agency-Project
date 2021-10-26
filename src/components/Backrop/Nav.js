import { Link } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = (props) => {
  const titles = props.titles;

  const currentTitle =
    window.location.href.split('/')[window.location.href.split('/').length - 1];

  return (
    <ul className={classes.list}>
      {titles.map((title) => (
        <li
          key={title}
          className={title === currentTitle ? classes.highlighted : ''}
        >
          <Link to={`/${title}`} className={classes.listItem}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
