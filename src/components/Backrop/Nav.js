import { Link } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = (props) => {
  const titles = props.titles;

  const currentTitle =
    window.location.href.split('/')[window.location.href.split('/').length - 1];

  const listPosition = {
    top: `${47.5 - titles.indexOf(currentTitle) * 4.1}%`,
  };

  const transformedList = [];

  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];

    transformedList.push(
      <li
        key={title}
        className={title === currentTitle ? classes.highlighted : ''}
      >
        <Link to={`/${title}`} className={classes.listItem}>
          {title}
        </Link>
      </li>
    );
  }

  return (
    <ul style={listPosition} className={classes.list}>
      {transformedList}
    </ul>
  );
};

export default Nav;
