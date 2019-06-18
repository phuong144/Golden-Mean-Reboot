import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {Navtest} from './components/Navtest';
import {LoggedOut} from './components/LoggedOut';
import {About} from './components/About';
import {BrowserRouter as Router, Route, Link } from "react-router";

firebase.initializeApp({
  apiKey: "AIzaSyAP_yZuslfF5ItU2w3IEH-cwejhCtIniw8",
  authDomain: "the-golden-mean.firebaseapp.com"
})

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        isSignedIn: false,
        home: false,
        about: false,
        podcasts: false


    }
}


  render() {
    return (
      <div className="App">
          
          <Navtest />
          <LoggedOut />
          
        

        
          
        
      </div>
    )
  }
}

export default App
