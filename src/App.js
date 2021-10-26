import { Redirect, Route, Switch } from 'react-router';

import Nav from './components/Backrop/Nav';
import BlackSpace from './components/Backrop/BlackSpace';
import InfoPage from './components/InfoPage';

const DUMMY_DATA = [
  {
    title: 'Cool',
    description: '1Lorem ipsum neshto si',
    imgURL:
      'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Reasonable',
    description: '2Lorem ipsum neshto si',
    imgURL:
      'https://images.unsplash.com/photo-1565700430899-1c56a5cf64e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
  },
  {
    title: 'Safe',
    description: '3Lorem ipsum neshto si',
    imgURL:
      'https://images.unsplash.com/photo-1580355275559-10c832e123f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Quiet',
    description: '4Lorem ipsum neshto si',
    imgURL:
      'https://images.unsplash.com/photo-1634110555363-62469d636cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
  },
];

function App() {
  const titles = DUMMY_DATA.map((el) => el.title);

  return (
    <Switch>
      {titles.map((title) => (
        <Route path={`/${title}`} key={title} exact>
          <Nav titles={titles} />
          <BlackSpace />
          <InfoPage data={DUMMY_DATA.find((page) => page.title === title)} />
        </Route>
      ))}
      <Route path="*">
        <Redirect to={`/${titles[0]}`} />
      </Route>
    </Switch>
  );
}

export default App;
