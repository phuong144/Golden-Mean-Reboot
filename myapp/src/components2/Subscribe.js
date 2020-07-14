import React from 'react';
import './css/Subscribe.css';
import {Navbar} from "./Navbar";

export class Subscribe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            pass:"",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick(){
        alert("Signed Up!");
    }

    render(){

        

        return (
            <div id="Subscribe">
                
                
                
                <Navbar color="black" id="Subscribe"/>
                <div id="SubscribeBackground">
                    <p id="SubscribeTitle">SUBSCRIBE</p>
                    <p id="SubscribeDescription">The Golden Mean is available on the following platforms:</p>
                    <div id="platformbox">
                        <a target="_blank" href="https://podcasts.apple.com/us/podcast/the-golden-mean-podcast/id1506294853?fbclid=IwAR1oBJDXgJ3awmwvYlF9urCjlMO9uSXRuGAmDqiinYJ02ZsZkMk-NqeNu40">
                            <img src={require("./images/itunes2.png")}/>
                            <p>iTunes</p>
                        </a>
                        <a target="_blank" href="https://soundcloud.com/user-116024648">
                            <img src={require("./images/soundcloud2.png")}/> 
                            <p>SoundCloud</p>   
                        </a>
                        <a target="_blank" href="https://www.google.com/">
                            <img src={require("./images/stitcher2.png")}/>  
                            <p>Stitcher</p>  
                        </a>
                        <a target="_blank" href="https://open.spotify.com/show/2o4i9OCFtPNexR2yxiDUHw?si=JTeSEd7SRBOXqV4sh_j2dA">
                            <img src={require("./images/spotify2.png")}/>
                            <p>Spotify</p>
                        </a>
                    </div>
                
                </div>
                <div id="subscribefooter">
                    <div id="sfleft"> 
                        <img src={require("./images/Logo.jpg")}/>
                        <div>
                            <p>Follow us on</p>
                            <a>Facebook</a>
                            <a>Twitter</a>
                            <a>Instagram</a>
                        </div>
                    </div>
                    <div id="sfright"> 
                        <p>Get updated when a new episode comes out!</p>
                        <div>
                            <input value="Email Address" type="text" id="emailaddress" name="Sign Up" />
                            <button onClick={this.handleClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            
            </div>
        
        );
    }

}

