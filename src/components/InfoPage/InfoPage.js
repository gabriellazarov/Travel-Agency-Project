import Button from './Button';
import classes from './InfoPage.module.css';
import TextArea from './TextArea';

const InfoPage = (props) => {
  const data = props.data;

  return (
    <div className={classes.container}>
      <img src={data.imgURL} alt="a beautiful tourist spot" />
      {!props.modalIsVisible && (
        <>
          <Button
            text="< Return"
            clickHandler={props.clickHandler}
            classes={classes.button}
          />
          <TextArea data={data} />
        </>
      )}
    </div>
  );
};

export default InfoPage;
