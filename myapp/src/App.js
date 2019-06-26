import React, { Component } from "react"
import firebase from "firebase"
import {Mainnav} from './components/Mainnav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from './components/Home';
import {About} from './components/About';
import {PodcastPage} from './components/PodcastPage';



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
      <Router>
      <div className="App">         
          <Mainnav />  
          <Route exact path='/' component={Home} />
          
          <Route path='/About' component={About} />            
          <Route path='/Podcasts' component={PodcastPage}  />
                                                
      </div>
      </Router>
    )
  }
}

export default App
