import 'jsdom-global/register';

import { jest, test } from '@jest/globals';
import { mount, render } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from '../../store';
import { darkTheme } from '../../styles/theme';
import Header from './index';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
  };
});

test('Header component render', () => {
  const wrapper = render(
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Header tweetsCount={3} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
});
