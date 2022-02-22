import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {ThemeProvider} from 'styled-components';
import {theme} from './config/theme';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);