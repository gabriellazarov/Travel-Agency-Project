import { Route, Switch, Redirect } from 'react-router-dom';

import Introduction from './pages/Introduction';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path={'/'} exact>
        <Redirect to={'/introduction'} />
      </Route>
      <Route path={'/introduction'} exact>
        <Introduction />
      </Route>
      <Route path={'/home'} exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
