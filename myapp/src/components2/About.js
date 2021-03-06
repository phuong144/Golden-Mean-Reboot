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
                <p id="funfact">Fun fact: Timothy and Swan share the same birthday!</p>
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
                    <p id="swanabout" className="hostp">Swan is a Sociology and Global Studies double-major student at UCLA! He immigrated to the United States from his home country of Myanmar (Burma) at the age of 8. He aspires to be a professor in higher education in the future. In his free time, he likes to play video games and spend time with friends and family</p>
                </div>
               

                <div className="picemail">
                <img id="swanpic" src={require("./images/Swan.png")}/>
                <p className="email" ><a href="mailto:swanyehtut91920@gmail.com">swanyehtut91920@gmail.com</a></p>
                </div>
                
            </div>
            <div id="tim" className="hostSection">
                <div className="picemail">
                    <img id="timpic" src={require("./images/Tim.png")}/>
                    <p className="email"><a href="mailto:timothyscheuermann@gmail.com">timothyscheuermann@gmail.com</a></p>
                </div>
                
 
                <div id="abouttim" className="hostdescription">
                    <p id="timname" className="hostname">Timothy Scheuermann</p>
                    <p id="timabout" className="hostp">Timothy is an Industrial Engineering major at Cal Poly who has interests in sports, philosophy and politics. He is a member of Intervarsity Christian Fellowship, plays goalie on intramural soccer team and runs in his free time. In high school, he could run a mile in 4:29.</p>
                </div>
            </div>
        </div>
    );
}
