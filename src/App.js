import { Route, Switch, Redirect } from 'react-router-dom';

import Introduction from './pages/Introduction';

function App() {
  return (
    <Switch>
      <Route path={'/'} exact>
        <Redirect to={'/introduction'} />
      </Route>
      <Route path={'/introduction'} exact>
        <Introduction />
      </Route>
    </Switch>
  );
}

export default App;
