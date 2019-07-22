import React from 'react';
import {Intro} from './Intro';
import {Landing} from './Landing';
import {ScrollToTopOnMount} from './ScrollToTopOnMount';

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
    

        };
    }


    render(){

    

        return (  
            <div>
                <ScrollToTopOnMount />
                <Landing />
                <div>
                    <Intro />
                    
                    <footer className="footer" style={{backgroundColor:"grey", bottom:'0', position:'relative'}}>
                        <div className="container-fluid">
                            <p className="text-center" color="black" style={{marginTop:'10px'}}>
                                <img className="logo" src="images/Logo.jpg" width="20" height="20" alt=""/>
                                The Golden Mean
                            </p>
                            <p className = "text-center">
                                <small>&copy; 2018 The Golden Mean Ltd</small>
                            </p>
                            <p className="text-center">
                                Developed by Patrick Phuong and Anson Lee
                                <br></br>
                                pphuong@ucsc.edu - all197@ucsd.edu
                            </p>
                        </div>
                    </footer>
                                        
                </div>
            </div>
        );
    }

}
