import classes from './InfoPage.module.css';

const InfoPage = (props) => {
  const data = props.data;

  return (
    <div className={classes.container}>
      <img src={data.imgURL} alt="a beautiful tourist spot" />
      <div className={classes.textArea}>
        <h1>{data.title}</h1>
        <span>{data.description}</span>
      </div>
    </div>
  );
};

export default InfoPage;
