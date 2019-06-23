import React from 'react';
import firebase from "firebase";
import {Podcast} from './Podcast';

export class PodcastPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    
    render(){
        
        return(
            <Podcast i={1}/>
        )
        
        
    }

}