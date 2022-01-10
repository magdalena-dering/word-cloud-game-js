import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from '../src/provider';

const history = createBrowserHistory();

export const ProvidersWrapper = ({ children }) => {
  return (
    <Router history={history}>
      <Provider>{children}</Provider>
    </Router>
  );
};
