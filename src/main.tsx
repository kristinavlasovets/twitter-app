import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ReduxProvider from './components/ReduxProvider';
import App from './App';

import './lib/firebase';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ReduxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
