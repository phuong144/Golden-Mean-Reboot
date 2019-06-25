import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAP_yZuslfF5ItU2w3IEH-cwejhCtIniw8",
  authDomain: "the-golden-mean.firebaseapp.com",
  databaseURL: "https://the-golden-mean.firebaseio.com",
  projectId: "the-golden-mean",
  storageBucket: "the-golden-mean.appspot.com",
  messagingSenderId: "85955204254",
  appId: "1:85955204254:web:5708276cfb24c289"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
