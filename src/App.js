import { Route, Switch, Redirect } from 'react-router-dom';

import Introduction from './pages/Introduction';
import Login from './pages/Login';
import OfferPackage from './pages/OfferPackage';
import Offers from './pages/Offers';
import Register from './pages/Register';

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
      <Route path={'/offers/:package'} exact>
        <OfferPackage />
      </Route>
      <Route path={'/login'} exact>
        <Login />
      </Route>
      <Route path={'/register'} exact>
        <Register />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/introduction'} />
      </Route>
    </Switch>
  );
}

export default App;
