import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { theme, ColorModeScript } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
document.getElementById('root')
);

reportWebVitals();