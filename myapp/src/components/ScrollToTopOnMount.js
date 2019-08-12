import React from 'react';
import {withRouter} from 'react-router';


export class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
      render() {
        return null;
      }
    }
  
