import { Route, Switch, Redirect } from 'react-router-dom';

import Introduction from './pages/Introduction';
import Offers from './pages/Offers';

function App() {
  return (
    <Switch>
      <Route path={'/'} exact>
        <Redirect to={'/introduction'} />
      </Route>
      <Route path={'/introduction'} exact>
        <Introduction />
      </Route>
      <Route path={'/offers'} exact>
        <Offers />
      </Route>
    </Switch>
  );
}

export default App;
