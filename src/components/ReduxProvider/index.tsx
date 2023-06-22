import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../../store';

import { ReduxProviderProps } from './interface';

const ReduxProvider: FunctionComponent<ReduxProviderProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

export default ReduxProvider;
