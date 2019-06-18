import React from 'react';
import {Intro} from './Intro';
import {Landing} from './Landing';

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
    

        };
    }


    render(){

    

        return (  
            <div>
                
                <Landing />
                <div>
                    <Intro />
                    
                </div>
            </div>
        );
    }

}
