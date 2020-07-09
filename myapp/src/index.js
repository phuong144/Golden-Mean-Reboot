import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import firebaseConfig from './firebase-config.js';
import firebase from 'firebase';
import {Homepage} from './components2/Homepage'
import App2 from "./App2";
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App2 />,
  document.getElementById('root')
);
