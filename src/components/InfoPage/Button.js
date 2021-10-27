import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button onClick={props.clickHandler} className={`${props.classes} ${classes.button}`}>
      {props.text}
    </button>
  );
};

export default Button;
