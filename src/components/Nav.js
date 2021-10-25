import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = (props) => {
  const currentTitle =
    window.location.href.split('/')[window.location.href.split('/').length - 1];

  return (
    <>
      <ul>
        {props.titles.map((title) => (
          <li
            key={title}
            className={title === currentTitle ? classes.highlighted : ''}
          >
            <Link to={`/${title}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
