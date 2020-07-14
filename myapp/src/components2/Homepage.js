import React from 'react';
import './css/Homepage.css';
import {Navbar} from "./Navbar";
import {SocialMedia} from "./SocialMedia";
import app from "firebase/app";
import 'firebase/firestore';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            intro:"",
            description:"",
            url:"",
            docSize:0,
        };
    }
    componentDidMount(){
        let ref = this;
        let podcasts = app.firestore().collection("podcasts");
        podcasts.get().then(function(doc){
            ref.setState({
                docSize:doc.size,
            })
            console.log(ref.state.docSize);
            let ep = app.firestore().collection("podcasts").doc("pod"+ref.state.docSize);
            ep.get().then(function(doc){
                ref.setState({
                    title:doc.data().title,
                    intro:doc.data().intro,
                    description:doc.data().description,
                    url:doc.data().url,
                })
                console.log(ref.state.title);
            }.bind(this))
        })
       
        
    }
    render(){
        return (
            <div id="homepage">
                <div id="background">
                    
                
                <Navbar />
                <Intro />
                
                <LatestEp title={this.state.title + ": "+this.state.intro} description={this.state.description} url={this.state.url}/>
                <AllEp />
                <SocialMedia />
                </div>
                <Footer />       
            </div>     
        );
    }

}

function AllEp(props){
    return(
        <div id="AllEp">
            <p><Link id="a1" to="/Episodes">ALL EPISODES</Link></p>
        </div>
    );
}

function LatestEp(props){
    
    return(
        <div id="Ep"> 
           

          
            <input onClick={() =>{
                let x = document.getElementById("audio");
                x.play();
            }} id="playbutton" type="image" src={require("./images/playcircle.png")} />
            

            
            <p id="htitle">{props.title}</p>
            
            <p id="description">{props.description}</p>
            <audio
                    src={props.url}                    
                    controls="true"
                    id="audio"
                    
                    typeof="audio/mpeg"
                    preload="none"
                    

                ></audio>
          
        </div>
    )
}

function Footer(props) {
    return(
        <div className="footer">
                
                <p id="f1">
                <img id="fimg" src={require("./images/Logo.jpg")}/>
                    The Golden Mean
                </p>
                
                <p id="f2">&copy; 2018 The Golden Mean Ltd</p>
               
                <p id="f3">
                    Developed by Patrick Phuong and Anson Lee
                    <br></br>
                    pphuong@ucsc.edu - all197@ucsd.edu
                </p>
            
        </div>
    );
}

function Intro(props){
    return(
        <div id="HIntro1">

        
        <div id="HIntro">
            <p id="I1">Welcome to the <br></br>Golden Mean Podcast <br></br>hosted by Timothy and Swan!</p>
            <p id="I2"><br></br>These podcasts will feature wide-ranging conversations about sports, politics, philosophy, and life in general. We discuss challenging topics but the goal is always to have fun doing it while sharing our perspectives!</p>
        </div>
        <img id="hlogo" src={require("./images/Logo.jpg")}/>
        </div>
    )
}