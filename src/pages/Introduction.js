import { useEffect, useState } from 'react';
import BlackSpace from '../components/IntroductionComponents/Backrop/BlackSpace';
import Transitioner from '../components/IntroductionComponents/Backrop/Transitioner';

import Nav from '../components/IntroductionComponents/Backrop/Nav';
import InfoPage from '../components/IntroductionComponents/InfoPage/InfoPage';
import Button from '../components/SharedComponents/Button';

import classes from './Introduction.module.css';
import { Link } from 'react-router-dom';

const Introduction = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [titleData, setTitleData] = useState([]);
  const [currentTitle, setCurrentTitle] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    async function setdata() {
      const response = await fetch(
        'https://at-least-4-characters-long-default-rtdb.europe-west1.firebasedatabase.app/travelAgency/agencyName.json'
      );
      const data = await response.json();

      const titles = [];
      for (let key in data) {
        titles.push({
          description: data[key].description,
          imgURL: data[key].imgURL,
          title: data[key].title,
        });
      }

      setTitleData(titles);
      setCurrentTitle(titles[0]);
    }
    setdata();
  }, []);

  //2 states to control transition animation
  useEffect(() => {
    if (isTransitioning !== false) {
      const timer = setTimeout(() => {
        setCurrentTitle(isTransitioning);
        setIsTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const removeModal = () => {
    setModalIsVisible(false);
  };
  const returnToModal = () => {
    setModalIsVisible(true);
  };

  const changeCurrentTitle = (title) => {
    if (currentTitle.title !== title) {
      setIsTransitioning(titleData.find((a) => a.title === title));
    }
  };

  const titles = titleData.map((el) => el.title);

  const buttonAnimationClasses = {
    enterActive: classes.MyClassEnterActive,
    enterDone: classes.MyClassEnterDone,
    exitActive: classes.MyClassExit,
    exitDone: classes.MyClassExitActive,
  };

  return (
    <>
      <Nav
        show={modalIsVisible}
        titles={titles}
        currentTitle={isTransitioning || currentTitle}
        changeTitleHandler={changeCurrentTitle}
      />
      <Transitioner show={isTransitioning} />
      <BlackSpace
        show={modalIsVisible}
        clickHandler={removeModal}
        titleLetter={currentTitle.title}
      />
      <Link to={'/offers'}>
        <Button
          show={modalIsVisible}
          text="Senpai🡕"
          classes={classes.button}
          animationClasses={buttonAnimationClasses}
        />
      </Link>
      <InfoPage
        data={currentTitle}
        clickHandler={returnToModal}
        modalIsVisible={modalIsVisible}
      />
    </>
  );
};

export default Introduction;
