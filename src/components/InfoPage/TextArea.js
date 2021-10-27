import classes from './TextArea.module.css';

const TextArea = (props) => {
  const data = props.data;

  return (
    <div className={classes.textArea}>
      <h1>{data.title}</h1>
      <div className={classes.text}>{data.description}</div>
    </div>
  );
};

export default TextArea;
