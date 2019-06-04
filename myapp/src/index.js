import React from 'react';
import ReactDOM from 'react-dom';
import {Banner} from './components/Banner';
import {Navtest} from './components/Navtest';


class App extends React.Component {
  render() {

    const mainPicStyle = {
      display:'block',
      marginLeft:'auto',
      marginRight:'auto',
      border: '4px groove gold',
      borderradius: '20px',
      height: 'auto',
      width: '90rem'
    }

    return (
      <div>
        <Navtest />
        <div>
          <h1 className='text-center'>The Golden Mean</h1>
          <img src={require('../public/images/mainpic.HEIC')} className="img-rounded img-responsive mainpic" style={mainPicStyle}/>
          <h4><i>Welcome to the Golden Mean Podcast hosted by Timothy and Swan! These podcasts will feature wide-ranging
          conversations about sports, politics, philosophy, and life in general. We discuss challenging topics but the
          goal is always to have fun doing it while sharing our perspectives!</i></h4>
        </div>
        <Banner />
        
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
