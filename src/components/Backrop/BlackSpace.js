import classes from './BlackSpace.module.css';

const BlackSpace = (props) => {
  return (
    <div className={classes.bg} onClick={props.clickHandler}>
      <img src="TransparentModal.png" className={classes.bigBox} />
      <div className={classes.bigLetter}>{props.titleLetter}</div>
    </div>
  );
};

export default BlackSpace;
