import React from 'react';
import ReactDom from 'react-dom';

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        const mainPicStyle = {
            display:'block',
            marginLeft:'auto',
            marginRight:'auto',
            border: '4px gold',
            borderradius: '20px',
            height: 'auto',
            width: '50%',
        }

        return (
        <div style={{width: '100%', position:'relative', paddingTop: '5em', paddingBottom: '5em'}}>
          <img src={require('../../public/images/mainpic.HEIC')} className="img-rounded img-responsive mainpic" style={mainPicStyle}/>
          <h2 style={{width:'50%', paddingTop: '3em', textAlign:'center', justifyContent:'center', marginLeft:'auto', marginRight:'auto'}}><i>Welcome to the Golden Mean Podcast hosted by Timothy and Swan! These podcasts will feature wide-ranging
          conversations about sports, politics, philosophy, and life in general. We discuss challenging topics but the
          goal is always to have fun doing it while sharing our perspectives!</i></h2>
        </div>
        
        );
    }

}