import React from 'react';
import {BrowserReact as Router, Route, Link} from 'react-router-dom';
import './Landing.css'
import './Responsive.css'
export class Landing extends React.Component{
render(){
    

    return(
        <div>
            <header className="v-header container">
                <div className='fullscreen-video-wrap' style={{top:'0', left:'0', width:'100%', height:'100vh', overflow:'hidden'}}>
                    <video 
                        id="background-video" 
                        loop 
                        autoPlay 
                        muted 
                        playsInline
                        
                        src={require("../../public/images/backgroundvid.mp4")} 
                        type="video/mp4" />                               
                        
                </div>

                <div className='header-overlay'></div>
                <div className='header-content'>
                        <h1 className="Title"style={{color:'silver', fontWeight:'bold', fontSize:'9rem', textAlign:'center'}}>The Golden Mean</h1>
                        <h3 className="Hosts"style={{color:'white'}}>Swan Ye Htut - Timothy Scheuermann</h3>
                        
                        <div className='row' style={{justifyContent:'center', textAlign:'center'}}>
                        <a href="https://soundcloud.com/user-116024648" target="_blank"><h3 style={{color:'white'}}><u>SoundCloud</u></h3></a>
                        &nbsp; - &nbsp;&nbsp;
                        <Link  style={{color:'white'}} to="/Podcasts"><h3 style={{color :"white"}}><u>Podcasts</u></h3></Link>
                        </div>
                    

                            

                </div>
            </header>
        </div>
)}}
