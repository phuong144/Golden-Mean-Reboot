import React, { Component } from "react"
import firebase from "firebase"
import {Mainnav} from './components/Mainnav';




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
          
          <Mainnav />
          
        

        
          
        
      </div>
    )
  }
}

export default App
