import { Redirect, Route, Switch } from 'react-router';
import InfoPage from './components/InfoPage';

import Nav from './components/Nav';

const DUMMY_DATA = [
  {
    title: 'Title1',
    description: '1Lorem ipsum neshto si',
    imgURL:
      'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Title2',
    description: '2Lorem ipsum neshto si',
    imgURL:
      'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Title3',
    description: '3Lorem ipsum neshto si',
    imgURL:
      'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

function App() {
  const titles = DUMMY_DATA.map((el) => el.title);

  return (
    <Switch>
      {titles.map((title) => (
        <Route path={`/${title}`} key={title} exact>
          <Nav titles={titles} />
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
