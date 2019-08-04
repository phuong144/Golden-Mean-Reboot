import React from 'react';
import './Responsive.css';
import { Media } from 'react-bootstrap';

export class Intro extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        

        return (
        <div style={{width: '100%', position:'relative', paddingTop: '5em', paddingBottom: '5em'}}>
          <img src={require('../mainpic.HEIC')} alt="" className="img-rounded img-responsive IntroPic" 
          style={{
            width:'50%',
            display:'block',
            marginLeft:'auto',
            marginRight:'auto',
            border: '4px gold',
            borderRadius: '20px',
            height: 'auto',
        }}/>
          <h2 className="IntroDescription"style={{width:'50%', paddingTop: '3em', textAlign:'center', justifyContent:'center', marginLeft:'auto', marginRight:'auto'}}>Welcome to the Golden Mean Podcast hosted by Timothy and Swan! These podcasts will feature wide-ranging
          conversations about sports, politics, philosophy, and life in general. We discuss challenging topics but the
          goal is always to have fun doing it while sharing our perspectives!</h2>
        </div>
        
        );
    }

}