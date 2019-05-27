import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles.css';
import {Banner} from './components/Banner';

class App extends React.Component {
  render() {
    return (
      <Banner />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
