import { Route, Switch, Redirect } from 'react-router-dom';

import Introduction from './pages/Introduction';
import OfferPackage from './pages/OfferPackage';
import Offers from './pages/Offers';
import Auth from './pages/Auth';

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
      <Route path={'/auth'} exact>
        <Auth />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/introduction'} />
      </Route>
    </Switch>
  );
}

export default App;
