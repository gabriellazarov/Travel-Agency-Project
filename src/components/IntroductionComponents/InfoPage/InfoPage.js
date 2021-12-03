import Button from './Button';
import classes from './InfoPage.module.css';
import TextArea from './TextArea';

const InfoPage = (props) => {
  const data = props.data;

  return (
    <div className={classes.container}>
      <img src={data.imgURL} alt="a beautiful tourist spot" />

      <Button
        show={!props.modalIsVisible}
        text=" <"
        clickHandler={props.clickHandler}
        classes={classes.button}
      />
      <TextArea data={data} show={!props.modalIsVisible} />
    </div>
  );
};

export default InfoPage;
