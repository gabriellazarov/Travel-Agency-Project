import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/auth-context';
import { PackageContextProvider } from './store/offer-context';

ReactDOM.render(
  <PackageContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </PackageContextProvider>,
  document.getElementById('root')
);
