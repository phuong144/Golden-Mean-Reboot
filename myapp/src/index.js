import React from 'react';
import ReactDOM from 'react-dom';
import {Banner} from './components/Banner';
import {Navtest} from './components/Navtest';
import {LoggedIn} from './components/LoggedIn';
import {LoggedOut} from './components/LoggedOut';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
