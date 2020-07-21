import React from 'react';
import './css/Subscribe.css';
import {Navbar} from "./Navbar";
import app from "firebase/app";
import 'firebase/firestore';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {UploadForm} from '../components/UploadForm';
import {Container} from './UploadForm/Container';

export class Subscribe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"Gmail Address",
            pass:"",
            isAdmin:false,
            admin:false,
            
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          app.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => window.scrollTo(0,0)
        }
    }

    componentDidMount = () => {
        app.auth().onAuthStateChanged(user => {
            if(user){
                let docRef = app.firestore().collection('admins2').doc(user.email);  
                docRef.get().then(function(doc){
                    if(doc.exists){
                        
                        console.log(user.uid, user);
                        this.setState({
                            isAdmin:true,
                            admin: true

                        })
                        
                    }else{
                        this.setState({
                            isAdmin:false,
                            admin:false,
                        })
                        console.log("User not admin");
                    }
                }.bind(this))
            }else {
                this.setState({
                    isAdmin:false,
                    admin:false,
                })
            }
        })             
    }       
    
    handleClick(e){

        
       
        let email = app.firestore().collection("MailingList2").doc(this.state.email);
        email.get().then(function(doc){
            if(doc.exists){
                if(email.id == "timothyscheuermann@gmail.com" || email.id == "swanyehtut@g.ucla.edu" || email.id == "goldenmeants@gmail.com"){
                    this.setState({isAdmin:true})
                }else{
                    alert("Already Subscribed!");
                }
            }else{
                email.get().then(function(doc){
                    if(!doc.exists){
                        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if(this.state.email === "Gmail Address" || !regex.test(this.state.email)){
                            alert("Please enter a valid gmail address");
                        }else{
                            email.set({
                                subscribed:true,
                            })
                            alert("Subscribed!");
                        }
                        
                    }
                }.bind(this))
                
            }

            
        }.bind(this))
        e.preventDefault();
       
        
    }
    handleInputChange(event) {
       
        
        let value = event.target.value;
        this.setState({
            email:value,
        })
       
        
       
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
                        <a target="_blank" href="https://www.stitcher.com/podcast/the-golden-mean-podcast?fbclid=IwAR1HIwn-eC58ut7-rOSPe1RS0MQYUi0Ei5pnyc33kIJexsieZ6J13aMuenI">
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
                        
                    </div>
                    {this.state.isAdmin ? 

                            
                                this.state.admin? 

                                (
                                    <Container />
                                )
                                :
                                (<StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={app.auth()}
                                />) 
                                
                            

                            
                            : 
                            
                            (<div></div>)
                    }
                    <div id="sfright"> 
                        <p>Get updated when a new episode comes out!</p>
                        <form>
                            <input onChange={this.handleInputChange} value={this.state.email} type="text" id="gmail" name="email" />
                            <input id="submit" type="submit" value="Sign Up" onClick={this.handleClick} />
                        </form>
                    </div>
                </div>
            
            </div>
        
        );
    }

}

