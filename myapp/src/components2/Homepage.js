import React from 'react';
import './css/Homepage.css';
import {Navbar} from "./Navbar";
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
                
                </div>
                <Footer />       
            </div>     
        );
    }

}

function SocialMedia(props){
    return(
        <div id="social">
            <div id="findus">
                <hr className="hr1"></hr>
                <p id="find">FIND US ON</p>
                <hr className="hr2"></hr>
            </div>
            <div id="logolinks">
                <div className="box"><a target="_blank" href="https://podcasts.apple.com/us/podcast/the-golden-mean-podcast/id1506294853?fbclid=IwAR1oBJDXgJ3awmwvYlF9urCjlMO9uSXRuGAmDqiinYJ02ZsZkMk-NqeNu40"><img id="itunes" src={require("./css/itunes.png")}></img><p>iTunes</p></a></div>
                
                <div className="box"><a target="_blank" href="https://soundcloud.com/user-116024648"><img id="soundcloud" src={require("./css/soundcloud.png")}></img><p>Soundcloud</p></a></div>
                
                <div className="box"><a target="_blank" href="https://www.google.com/"><img id="stitcher" src={require("./css/stitcher.png")}></img><p>Stitcher</p></a></div>
                
                <div className="box"><a target="_blank" href="https://open.spotify.com/show/2o4i9OCFtPNexR2yxiDUHw?si=JTeSEd7SRBOXqV4sh_j2dA"><img id="spotify" src={require("./css/spotify.png")}></img><p>Spotify</p></a></div>
                
            </div>
        </div>
    );
}

function AllEp(props){
    return(
        <div id="AllEp">
            <p><Link id="n1" to="/Episodes">ALL EPISODES</Link></p>
        </div>
    );
}

function LatestEp(props){
    
    return(
        <div id="Ep"> 
           

          
            <input onClick={() =>{
                let x = document.getElementById("audio");
                x.play();
            }} id="playbutton" type="image" src={require("./css/playcircle.png")} />
            

            
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
                <img id="fimg" src={require("./css/Logo.jpg")}/>
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
        <div id="HIntro">
            <p id="I1">Welcome to the <br></br>Golden Mean Podcast <br></br>hosted by Timothy and Swan!</p>
            <p id="I2"><br></br>These podcasts will feature wide-ranging conversations about sports, politics, philosophy, and life in general. We discuss challenging topics but the goal is always to have fun doing it while sharing our perspectives!</p>
        </div>
    )
}