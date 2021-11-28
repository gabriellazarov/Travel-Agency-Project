import { CSSTransition } from 'react-transition-group';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={900}
      classNames={{
        enterActive: classes.MyClassEnterActive,
        enterDone: classes.MyClassEnterDone,
        exitActive: classes.MyClassExit,
        exitDone: classes.MyClassExitActive,
      }}
    >
      <button
        onClick={props.clickHandler}
        className={`${props.classes} ${classes.button}`}
      >
        {props.text}
      </button>
    </CSSTransition>
  );
};

export default Button;
