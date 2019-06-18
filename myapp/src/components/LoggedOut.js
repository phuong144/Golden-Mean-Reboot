import React from 'react';
import ReactDom from 'react-dom';
import {Banner} from './Banner';
import {Navtest} from './Navtest';
import {Home} from './Home';
import {Landing} from './Landing';

export class LoggedOut extends React.Component{
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
                    <Home />
                    <Banner />
                </div>
            </div>
        );
    }

}
