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
                <div id="AboutBackground">
                
                
                <Navbar color="black" id="About"/>
                <AboutSummary />
                <Meet />
                <Hosts />
                </div>
            
            </div>
        
        );
    }

}

function AboutSummary(props){
    return(
        <div id="section1">
            <img id="AboutLogo" src={require("./images/Logo.jpg")}/>
            <div id="AboutSection">
                <p id="AboutTitle">The Golden Mean</p>
                <p id="AboutDescription">The Golden Mean or Doctrine of the Mean by Aristotle is the idea that ethical values should result from a balance (or mean) between two vices. We thought it’d be perfect for us considering we have different opinions on how the world works but through productive discussion, arrive at a better understanding of the topic.</p>
                <p id="credits">Credit to Vania Gunawan for designing our logo</p>
            </div>
        </div>

    );
}

function Meet(props){
    return(
        <div id="findus">
            <hr className="frow" id="ahr1"></hr>
            <p className="frow" id="Aboutfind">Meet Our Hosts!</p>
            <hr className="frow" id="ahr2"></hr>
        </div>
    )
}

function Hosts(props){
    return(
        <div id="hosts">
            <div id="swan" className="hostSection">
                <div id="aboutswan" className="hostdescription">
                    <p id="swanname" className="hostname">Swan Ye Htut</p>
                    <p id="swanabout" className="hostp">Swan is a Global Studies major studying at UCLA! He immigrated to the United States from his home country of Myanmar (Burma) at the age of 8. In high school, he was very active in the volunteer club of Interact. Now at UCLA, his involvements include being on a dance team, serving on his dorm’s government council and acting as a Cub Tour Guide for K-8 students. In his free time, he likes to play video games and dance!</p>
                </div>
               

                <div>
                <img id="swanpic" src={require("./images/Swan.png")}/>
                <p className="email" >swanyehtut91920@gmail.com</p>
                </div>
                
            </div>
            <div id="tim" className="hostSection">
                <div>
                    <img id="timpic" src={require("./images/Tim.png")}/>
                    <p className="email" >timothyscheuermann@gmail.com</p>
                </div>
                
 
                <div id="abouttim" className="hostdescription">
                    <p id="timname" className="hostname">Timothy Scheuermann</p>
                    <p id="timabout" className="hostp">Timothy is an Industrial Engineering major at Cal Poly who has interests in sports, philosophy and politics. He is a member of Intervarsity Christian Fellowship, plays goalie on intramural soccer team and runs in his free time. In high school, he could run a mile in 4:29.</p>
                </div>
            </div>
        </div>
    );
}
