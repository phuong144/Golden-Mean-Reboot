import React, { Component } from "react"
import {Navbar} from './components2/Navbar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Homepage} from './components2/Homepage';
import {Episodes} from './components2/Episodes';
import {About} from './components2/About';

class App2 extends Component {
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
             
            <Route exact path='/' component={Homepage} />  
            <Route path='/Episodes' component={Episodes} />
            <Route path='/About' component={About} />                                 
          </div>
        
      </Router>
    )
  }
  
}

export default App2