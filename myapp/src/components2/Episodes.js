import React from 'react';
import {Navbar} from "./Navbar";


export class Episodes extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        

        return (
            <div id="Episodes">
                <Navbar />
                <p>Episodes</p>
            
            </div>
        
        );
    }

    


}