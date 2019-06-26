import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseConfig from './firebase-config.js';
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
