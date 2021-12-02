import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from '../provider';

const history = createBrowserHistory();

export const ProvidersWraper = ({ children }) => {
  return (
    <Router history={history}>
      <Provider>{children}</Provider>
    </Router>
  );
};
