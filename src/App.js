import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import FullModal from './components/Backrop/FullModal';
import InfoPage from './components/InfoPage/InfoPage';

const DUMMY_DATA = [
  {
    title: 'Cool',
    description: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgURL:
      'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Reasonable',
    description: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgURL:
      'https://images.unsplash.com/photo-1565700430899-1c56a5cf64e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
  },
  {
    title: 'Safe',
    description: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgURL:
      'https://images.unsplash.com/photo-1580355275559-10c832e123f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Quiet',
    description: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgURL:
      'https://images.unsplash.com/photo-1634110555363-62469d636cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
  },
];

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const removeModal = () => {
    setModalIsVisible(false);
  };
  const returnToModal = () => {
    setModalIsVisible(true);
  };

  const titles = DUMMY_DATA.map((el) => el.title);

  return (
    <Switch>
      {titles.map((title) => (
        <Route path={`/${title}`} key={title} exact>
          {modalIsVisible && (
            <FullModal titles={titles} clickHandler={removeModal} />
          )}
          <InfoPage data={DUMMY_DATA.find((page) => page.title === title) } clickHandler={returnToModal} modalIsVisible={modalIsVisible}/>
        </Route>
      ))}
      <Route path="*">
        <Redirect to={`/${titles[0]}`} />
      </Route>
    </Switch>
  );
}

export default App;
