import React, { Component } from "react"
import {Mainnav} from './Mainnav';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from './Home';
import {About} from './About';
import {PodcastPage} from './PodcastPage';
import {Subscribe} from './components/Subscribe';

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
            <Route path='/Podcasts' component={PodcastPage} />
            <Route path='/About' component={About} />   
            <Route path='/Subscribe' component={Subscribe} />                                                          
          </div>
        
      </Router>
    )
  }
  
}

export default App
