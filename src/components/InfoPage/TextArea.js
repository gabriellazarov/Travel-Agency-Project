import classes from './TextArea.module.css';
import { CSSTransition } from 'react-transition-group';

const TextArea = (props) => {
  const data = props.data;

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
      <div className={classes.textArea}>
        <h1>{data.title}</h1>
        <div className={classes.text}>{data.description}</div>
      </div>
    </CSSTransition>
  );
};

export default TextArea;
