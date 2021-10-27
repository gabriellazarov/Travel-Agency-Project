import BlackSpace from './BlackSpace';
import Nav from './Nav';

const FullModal = (props) => {
  return (
    <>
      <Nav titles={props.titles} />
      <BlackSpace clickHandler={props.clickHandler} />
    </>
  );
};

export default FullModal;
