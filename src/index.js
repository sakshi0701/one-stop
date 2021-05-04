import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './global-state/state';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);