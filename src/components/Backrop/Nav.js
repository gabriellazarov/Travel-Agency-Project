import { CSSTransition } from 'react-transition-group';
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
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={500}
      classNames={{
        enterActive: classes.MyClassEnterActive,
        enterDone: classes.MyClassEnterDone,
        exitActive: classes.MyClassExit,
        exitDone: classes.MyClassExitActive,
      }}
    >
      <ul style={listPosition} className={classes.list}>
        {transformedList}
      </ul>
    </CSSTransition>
  );
};

export default Nav;
