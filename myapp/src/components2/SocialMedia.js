import React from 'react';
import './css/SocialMedia.css';


export class SocialMedia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          
        };
    }
    
    render(){
        return (
            <div id="social">
                <div id="findus">
                    <hr className="frow" id="hr1"></hr>
                    <p className="frow" id="find">FIND US ON</p>
                    <hr className="frow" id="hr2"></hr>
                </div>
                <div id="logolinks">
                    <a className="media" target="_blank" href="https://podcasts.apple.com/us/podcast/the-golden-mean-podcast/id1506294853?fbclid=IwAR1oBJDXgJ3awmwvYlF9urCjlMO9uSXRuGAmDqiinYJ02ZsZkMk-NqeNu40"><img id="itunes" src={require("./images/itunes.png")}></img><p>iTunes</p></a>
                    
                    <a className="media" target="_blank" href="https://soundcloud.com/user-116024648"><img id="soundcloud" src={require("./images/soundcloud.png")}></img><p>Sound<br></br>cloud</p></a>
                    
                    <a className="media" target="_blank" href="https://www.stitcher.com/podcast/the-golden-mean-podcast?fbclid=IwAR1HIwn-eC58ut7-rOSPe1RS0MQYUi0Ei5pnyc33kIJexsieZ6J13aMuenI"><img id="stitcher" src={require("./images/stitcher.png")}></img><p>Stitcher</p></a>
                    
                    <a className="media" target="_blank" href="https://open.spotify.com/show/2o4i9OCFtPNexR2yxiDUHw?si=JTeSEd7SRBOXqV4sh_j2dA"><img id="spotify" src={require("./images/spotify.png")}></img><p>Spotify</p></a>
                    
                </div>
            </div>   
        );
    }

}


