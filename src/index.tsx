import React from 'react';
import ReactDOM from 'react-dom/client';
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
    <Reset />
    <Global />
    <App />
  </ThemeProvider>
);
