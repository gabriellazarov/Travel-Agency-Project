import classes from './Transitioner.module.css';
import { CSSTransition } from 'react-transition-group';

const Transitioner = (props) => {
  const image = (
    <img
      src="TransparentModal.png"
      className={classes.circle}
      alt="we tried /shrug"
    />
  );

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
      <span className={classes.circle} />
    </CSSTransition>
  );
};

export default Transitioner;
