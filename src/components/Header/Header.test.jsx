import 'jsdom-global/register';

import { jest, test } from '@jest/globals';
import { render } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '../../styles/theme';
import ReduxProvider from '../ReduxProvider';
import Header from './index';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
  };
});

test('hello world', () => {
  const wrapper = render(
    <ThemeProvider theme={darkTheme}>
      <ReduxProvider>
        <BrowserRouter>
          <Header tweetsCount={3} />
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  );
});
