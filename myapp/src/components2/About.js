import React from 'react';
import './css/About.css';
import {Navbar} from "./Navbar";

export class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    handleClick(){
        alert('Tim and Swan have the same birthday!')
    }

    render(){

        

        return (
            <div id="About">
                <Navbar color="black" id="About"/>
                <img id="background-img" src={require("./images/About.png")}></img>
            
            </div>
        
        );
    }

}
