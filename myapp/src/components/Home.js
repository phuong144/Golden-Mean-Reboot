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
                    
                    <footer className="footer" style={{backgroundColor:"grey", bottom:'0', position:'relative'}}>
                        <div className="container-fluid" className="footerdiv">
                            <p className="text-center" color="black">
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
