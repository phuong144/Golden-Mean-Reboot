import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


import "./css/Navbar.css";
export class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSignedIn: false,
            admin: false,
            uid:false,
            navExpanded: false,
            color:this.props.color,
            id:this.props.id,
        }
       
        
    }
    /*
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => window.scrollTo(0,0)
        }
    }

    getUID(uid, user){
        if(user){
            let docRef = firebase.firestore().collection('admins').doc(uid);  
            docRef.get().then(function(doc){
                if(doc.exists){
                    if(uid === doc.id && user){
                        this.setState({
                            uid: true,
                            isSignedIn: !!user,
                            admin: true

                        })
                        console.log("Successfully set state for admin - UID: " + this.state.uid);
                        console.log(user.displayName + " is an admin");
                        
                    }
                }else{
                    this.setState({isSignedIn: !!user, admin:false})
                    console.log("User not admin");
                }
            }.bind(this))
        }else{
            this.setState({isSignedIn: !!user,admin:false});
            console.log("Fully logged out");
        }

    }
    

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.getUID(firebase.auth().currentUser.uid, user);
                window.scrollTo(0,0);
            }else {
                this.setState({isSignedIn: !!user,admin:false, uid:""});
                this.scrollToTop();
                console.log("Fully Logged out");                   
                }       
        })             
    }       
    
    scrollToTop = () => {
        window.scrollTo(0,0);
        this.setState({navExpanded:false})
    }

    setNavExpanded(expanded){
        this.setState({navExpanded:expanded});
    }

    closeNav = () =>{
        this.setState({navExpanded:false});
    }
    */
    render(){
        if(this.state.color == "black"){
            if(this.state.id == "Ep"){

            
                return (
                    <div id="outernav" style={{background: "#2D2F3E"}}>
                        <div id="innernav">
                            <p><Link id="n0" to="/">HOME</Link></p>
                            <p><Link id="n1" to="/Episodes" style={{color:"#E6BB5C"}}>EPISODES</Link></p>
                            <p><Link id="n2" to="/About">ABOUT</Link></p>
                            <p><Link id="n3" to="/Subscribe">SUBSCRIBE</Link></p>
                            
        
                        </div>
        
                    </div>
                
                );
            }else if(this.state.id == "About"){
                return (
                    <div id="outernav" style={{background: "#2D2F3E"}}>
                        <div id="innernav">
                            <p><Link id="n0" to="/">HOME</Link></p>
                            <p><Link id="n1" to="/Episodes">EPISODES</Link></p>
                            <p><Link id="n2" to="/About" style={{color:"#E6BB5C"}}>ABOUT</Link></p>
                            <p><Link id="n3" to="/Subscribe">SUBSCRIBE</Link></p>
                            
        
                        </div>
        
                    </div>
                
                );
            }else if(this.state.id == "Subscribe"){
                return (
                    <div id="outernav" style={{background: "#2D2F3E"}}>
                        <div id="innernav">
                            <p><Link id="n0" to="/">HOME</Link></p>
                            <p><Link id="n1" to="/Episodes">EPISODES</Link></p>
                            <p><Link id="n2" to="/About">ABOUT</Link></p>
                            <p><Link id="n3" to="/Subscribe" style={{color:"#E6BB5C"}}>SUBSCRIBE</Link></p>
                            
        
                        </div>
        
                    </div>
                
                );
            }
        }else{

        
            return (
                <div id="outernav">
                    <div id="innernav">
                        <p><Link id="n0" to="/">HOME</Link></p>
                        <p><Link id="n1" to="/Episodes">EPISODES</Link></p>
                        <p><Link id="n2" to="/About">ABOUT</Link></p>
                        <p><Link id="n3" to="/Subscribe">SUBSCRIBE</Link></p>
                        

                    </div>

                </div>

            );
        }
    }

}
