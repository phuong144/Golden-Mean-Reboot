import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {PodcastPage} from './PodcastPage';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {About} from './About';
import {Home} from './Home';
import {UploadForm} from './UploadForm';


export class Mainnav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSignedIn: false,
            admin: false
        }
    }
    
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            
                
                
            
            
            if(user){
                if(firebase.auth().currentUser.displayName == "Patrick Phuong"){
                    this.setState({isSignedIn: !!user,admin:true});
                    console.log(user.displayName + " is an admin");
                }else{
                    this.setState({isSignedIn: !!user, admin:false})
                }
            } else {
                this.setState({isSignedIn: !!user,admin:false});
                console.log("Fully logged out");
            }
            
        })

    }                  
    

    render(){
        
        return (
            <Router>
            <Navbar expand="lg" fixed="top" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <Navbar.Brand>
                    <img src={require("../../public/images/Logo.jpg")}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />           
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <div className='row' style={{paddingLeft:'5px', paddingLeft:'5px'}}>
                      
                        <Link style={{paddingLeft:'10px', paddingLeft:'10px'}} to="/"><h3 style={{color :"white"}}>Home</h3></Link>
                        <Link style={{paddingLeft:'10px', paddingLeft:'10px'}} to="/About"><h3 style={{color :"white"}}>About</h3></Link>
                        <Link style={{paddingLeft:'10px', paddingLeft:'10px'}} to="/Podcasts"><h3 style={{color :"white"}}>Podcasts</h3></Link>
                        
                      
                    </div>
                    
                </Nav>
                    
                    {this.state.admin ?                        
                        (                       
                        <Nav pullRight>
                            <div className='row'>
                                <h1 style={{ color :"white", marginTop:"8px", marginRight:"10px", marginLeft:"10px", justifyContent:"center"}}>Welcome {firebase.auth().currentUser.displayName}</h1>
                                <img
                                    alt="profile picture"
                                    src={firebase.auth().currentUser.photoURL}   
                                    style={{marginRight:"10px", marginLeft:"10px"}}                      
                                />                                              
                                <button style={{marginRight:"10px", marginLeft:"10px"}} onClick={() => firebase.auth().signOut()}>Sign out!</button>
                                
                                <NavDropdown title="Upload" id="basic-nav-dropdown" alignRight>
                                    <UploadForm />
                                </NavDropdown>
                                
                            </div>
                        </Nav>                                             
                        ) : 
                        
                    this.state.isSignedIn ?  
                        (
                            <Nav pullRight>
                            <div className='row'>
                                <h1 style={{ color :"white", marginTop:"8px", marginRight:"10px", marginLeft:"10px", justifyContent:"center"}}>Welcome {firebase.auth().currentUser.displayName}</h1>
                                <img
                                    alt=""
                                    src={firebase.auth().currentUser.photoURL}  
                                    style={{marginRight:"10px", marginLeft:"10px"}}                       
                                />                                              
                                <button style={{marginRight:"10px", marginLeft:"10px"}} onClick={() => firebase.auth().signOut()}>Sign out!</button>                      
                    
                                
                            </div>
                            </Nav> 
                        ) :

                        (
                            <NavDropdown alignRight bg="transparent" title="Login" id="basic-nav-dropdown" style={{color :"white", fontSize: "2em"}}> 
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                            </NavDropdown>
                        )                  
                      
                    }
                    
                    
                </Navbar.Collapse>
            </Navbar>

            <Route exact path='/' component={Home} />
          
            <Route path='/About' component={About} />            
            <Route path='/Podcasts' component={PodcastPage}  />
                        

           
            </Router>
          
        );
    }

}
