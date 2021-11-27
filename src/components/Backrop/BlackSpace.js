import classes from './BlackSpace.module.css';

const BlackSpace = (props) => {
  const bigLetter = props.titleLetter ? props.titleLetter[0] : '';

  return (
    <div className={classes.bg} onClick={props.clickHandler}>
      <img
        src="TransparentModal.png"
        className={classes.bigBox}
        alt="we tried /shrug"
      />
      <div className={classes.bigLetter}>{bigLetter}</div>
    </div>
  );
};

export default BlackSpace;
