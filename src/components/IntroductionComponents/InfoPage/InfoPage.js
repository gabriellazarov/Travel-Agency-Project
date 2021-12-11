import Button from '../../SharedComponents/Button';
import classes from './InfoPage.module.css';
import TextArea from './TextArea';

const InfoPage = (props) => {
  const data = props.data;

  const animationClasses = {
    enterActive: classes.MyClassEnterActive,
    enterDone: classes.MyClassEnterDone,
    exitActive: classes.MyClassExit,
    exitDone: classes.MyClassExitActive,
  };

  return (
    <div className={classes.container}>
      <img src={data.imgURL} alt="a beautiful tourist spot" />

      <Button
        show={!props.modalIsVisible}
        text=" <"
        clickHandler={props.clickHandler}
        classes={classes.button}
        animationClasses={animationClasses}
      />
      <TextArea data={data} show={!props.modalIsVisible} />
    </div>
  );
};

export default InfoPage;
