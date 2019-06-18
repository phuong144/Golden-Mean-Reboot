import React from 'react';
import ReactDom from 'react-dom';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BrowserRouter as Router, Route, Link } from "react-router";
import {About} from './About';
import { LoggedOut } from './LoggedOut';

export class Navtest extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSignedIn: false,
        }
    }
    
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }


      componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
          console.log("user", user)
        })
      }

    render(){
        return (
            
            <Navbar expand="lg" fixed="top" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
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
                    
                        <Nav.Link to="/"><h3 style={{color :"white"}}>Home</h3></Nav.Link>
                        <Nav.Link to="/About"><h3 style={{color :"white"}}>About</h3></Nav.Link>
                        <Nav.Link to="/Podcasts"><h3 style={{color :"white"}}>Podcasts</h3></Nav.Link>
                        <Nav.Link to="/Contacts"><h3 style={{color :"white"}}>Contacts</h3></Nav.Link>

                    
                </Nav>
                    
                    {this.state.isSignedIn ? (
                        <Nav className='mr-auto'>
                        
                        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                        <img
                          alt="profile picture"
                          src={firebase.auth().currentUser.photoURL}
                        />
                        
                        </Nav> ) : (
                            <NavDropdown alignRight bg="transparent" title="Login" id="basic-nav-dropdown" style={{color :"transparent", fontSize: "2em"}}> 
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                            </NavDropdown>
                        )}
                    
                    
                </Navbar.Collapse>
            </Navbar>

            
          
        );
    }

}