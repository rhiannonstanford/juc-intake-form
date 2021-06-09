import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from 'notistack';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SnackbarProvider maxSnack={1}>
        <App />
      </SnackbarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


