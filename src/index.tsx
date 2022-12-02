import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import { theme } from 'common/styles/theme';
import Reset from 'common/styles/Reset';
import Global from 'common/styles/Global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Reset />
      <Global />
      <App />
    </Router>
  </ThemeProvider>
);
