import { useEffect, useState } from 'react';
import BlackSpace from './components/Backrop/BlackSpace';
import Transitioner from './components/Backrop/Transitioner';

import Nav from './components/Backrop/Nav';
import InfoPage from './components/InfoPage/InfoPage';

function App() {
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
    if (isTransitioning != false) {
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
    setIsTransitioning(titleData.find((a) => a.title === title));
  };

  const titles = titleData.map((el) => el.title);

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
      <InfoPage
        data={currentTitle}
        clickHandler={returnToModal}
        modalIsVisible={modalIsVisible}
      />
    </>
  );
}

export default App;
