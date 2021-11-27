import { Link } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = (props) => {
  const titles = props.titles;

  const currentTitle = props.currentTitle.title;

  const listPosition = {
    top: `${47.5 - titles.indexOf(currentTitle) * 4.1}%`,
  };

  const transformedList = [];

  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];

    const changeTitle = () => {
      props.changeTitleHandler(title);
    };

    transformedList.push(
      <li
        key={title}
        className={
          title === currentTitle ? classes.highlighted : classes.hoverable
        }
      >
        <span className={classes.listItem} onClick={changeTitle}>
          {title}
        </span>
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
