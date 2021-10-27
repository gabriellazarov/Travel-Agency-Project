import classes from './BlackSpace.module.css';

const BlackSpace = (props) => {
  const currentTitle =
    window.location.href.split('/')[window.location.href.split('/').length - 1];

  const shownLetter = currentTitle[0];

  return (
    <div className={classes.bg} onClick={props.clickHandler}>
      <div className={classes.bigBox}></div>
      <div className={classes.bigLetter}>{shownLetter}</div>
    </div>
  );
};

export default BlackSpace;
