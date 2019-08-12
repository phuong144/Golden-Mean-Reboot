import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav, NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import {UploadForm} from './UploadForm';


export class Mainnav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSignedIn: false,
            admin: false,
            uid:false,
            navExpanded: false
        }
       
        this.scrollToTop = this.scrollToTop.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.setNavExpanded = this.setNavExpanded.bind(this);
    }
    
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
                this.getUID(firebase.auth().currentUser.uid, user)
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

    render(){
        
        return (
            
            <Navbar  onToggle={this.setNavExpanded} expanded={this.state.navExpanded} expand="md" fixed='top' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                <Navbar.Brand>
                    <img src={require("../Logo.jpg")}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt=""
                    />           
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'silver'}}/>
                <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className='mr-auto'>
                    <div className='row' style={{justifyContent:'center'}}>
                        <Link  style={{paddingLeft:'10px', paddingRight:'10px'}} to="/" onClick={this.scrollToTop}><h3 style={{color :"white"}}>Home</h3></Link>   
                        <Link  style={{paddingLeft:'10px', paddingRight:'10px'}} to="/Podcasts" onClick={this.scrollToTop}><h3 style={{color :"white"}}>Podcasts</h3></Link>
                        <Link  style={{paddingLeft:'10px', paddingRight:'10px'}} to="/About" onClick={this.scrollToTop}><h3 style={{color :"white"}}>About</h3></Link>
                    </div>
                    
                </Nav>
                    
                    {this.state.admin ?                        
                        (                       
                        <Nav>
                            <div className='row'>
                                <h1 style={{ color :"white", marginTop:"8px", marginRight:"10px", marginLeft:"10px", justifyContent:"center"}}>Welcome {firebase.auth().currentUser.displayName}</h1>
                                <img
                                    alt=""
                                    src={firebase.auth().currentUser.photoURL}   
                                    style={{marginRight:"10px", marginLeft:"10px"}}  
                                    width="40"
                                    height="40"                    
                                />                                              
                                <button style={{marginRight:"10px", marginLeft:"10px",color:'black'}} onClick={() => firebase.auth().signOut()}>Sign out!</button>
                                
                                <NavDropdown title="Upload" id="basic-nav-dropdown" style={{backgroundColor:'white', textAlign:'center', margin:'auto'}} alignRight>
                                    <UploadForm />
                                </NavDropdown>
                                
                            </div>
                        </Nav>                                             
                        ) : 
                        
                    this.state.isSignedIn ?  
                        (
                            <Nav >
                            <div className='row'>
                                <h1 style={{ color :"white", marginTop:"8px", marginRight:"10px", marginLeft:"10px", justifyContent:"center"}}>Welcome {firebase.auth().currentUser.displayName}</h1>
                                <img
                                    alt=""
                                    src={firebase.auth().currentUser.photoURL}  
                                    style={{marginRight:"10px", marginLeft:"10px"}}       
                                    width="40"
                                    height="40"                
                                />                                              
                                <button style={{marginRight:"10px", marginLeft:"10px",color:'black',height:'40', width:'40'}} onClick={() => firebase.auth().signOut()}>Sign out!</button>                      
                    
                                
                            </div>
                            </Nav> 
                        ) :

                        (
                            <NavDropdown alignRight title="Login" id="basic-nav-dropdown" style={{color :"white", fontSize: "2em", justifyContent:'center'}}> 
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                            </NavDropdown>
                        )                  
                      
                    }
                    
                    
                </Navbar.Collapse>
            </Navbar>

           
            
          
        );
    }

}
