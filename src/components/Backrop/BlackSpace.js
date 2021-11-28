import classes from './BlackSpace.module.css';
import { CSSTransition } from 'react-transition-group';

const BlackSpace = (props) => {
  const bigLetter = props.titleLetter ? props.titleLetter[0] : '';

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={800}
      classNames={{
        enterActive: classes.MyClassEnterActive,
        enterDone: classes.MyClassEnterDone,
        exitActive: classes.MyClassExit,
        exitDone: classes.MyClassExitActive,
      }}
    >
      <div className={classes.bg} onClick={props.clickHandler}>
        <img
          src="TransparentModal.png"
          className={classes.bigBox}
          alt="we tried /shrug"
        />
        <div className={classes.bigLetter}>{bigLetter}</div>
      </div>
    </CSSTransition>
  );
};

export default BlackSpace;
