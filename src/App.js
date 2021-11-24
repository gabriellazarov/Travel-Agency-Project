import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import FullModal from './components/Backrop/FullModal';
import InfoPage from './components/InfoPage/InfoPage';


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [titleData, setTitleData] = useState([]);

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
    }
    setdata();
  }, []);

  const removeModal = () => {
    setModalIsVisible(false);
  };
  const returnToModal = () => {
    setModalIsVisible(true);
  };

  const titles = titleData.map((el) => el.title);

  return (
    <Switch>
      {titles.map((title) => (
        <Route path={`/${title}`} key={title} exact>
          {modalIsVisible && (
            <FullModal titles={titles} clickHandler={removeModal} />
          )}
          <InfoPage
            data={titleData.find((page) => page.title === title)}
            clickHandler={returnToModal}
            modalIsVisible={modalIsVisible}
          />
        </Route>
      ))}
      <Route path="*">
        <Redirect to={`/${titles[0]}`} />
      </Route>
    </Switch>
  );
}

export default App;
