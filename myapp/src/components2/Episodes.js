import React from 'react';
import {Navbar} from "./Navbar";
import app from "firebase/app";
import 'firebase/firestore';
//import { useLocation } from 'react-router-dom';
import {Podcast} from "./Podcast";

export class Episodes extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            showMore:false,
            button:'Load More',
            docSize: 0,
            docDisplay:0,
            isOdd:false,
        }
        
        this.handleClick = this.handleClick.bind(this);

        let docRef = app.firestore().collection("podcasts");
        docRef.get().then(function(doc){
            this.setState({
                docSize: doc.size,
                docDisplay: doc.size - 4
            })
        }.bind(this));
        
    }

    handleClick(){
        if(this.state.showMore == false){
            this.setState({
                showMore: true,
                button:"Show Less",
                docDisplay:0,
            })
        }else{
            this.setState({
                showMore:false,
                button:"Show More",
                docDisplay: this.state.docSize - 4
            })
        }
    }
     

    render(){
        let rows = [];
        
        
        for(let i=this.state.docSize; i>this.state.docDisplay; i--){
            rows.push(<Podcast num={i} key={i} />)
        }        
        

        return (
            
            <div id="Episodes">
                <Navbar color="black" id="Ep"/>
                <p id="title">Episodes</p>
                
                <div id="rows">
                {rows}
                </div>
                <button id="Loadmore" onClick={this.handleClick.bind(this)} >{this.state.button}</button>
                
               
            
            </div>
            
            
        
        );
    }

    


}
function SocialMedia(props){
    return(
        <div id="social">
            <div id="findus">
                <hr className="hr1"></hr>
                <p id="find">FIND US ON</p>
                <hr className="hr2"></hr>
            </div>
            <div id="logolinks">
                <div className="box"><a target="_blank" href="https://podcasts.apple.com/us/podcast/the-golden-mean-podcast/id1506294853?fbclid=IwAR1oBJDXgJ3awmwvYlF9urCjlMO9uSXRuGAmDqiinYJ02ZsZkMk-NqeNu40"><img id="itunes" src={require("./css/itunes.png")}></img><p>iTunes</p></a></div>
                
                <div className="box"><a target="_blank" href="https://soundcloud.com/user-116024648"><img id="soundcloud" src={require("./css/soundcloud.png")}></img><p>Soundcloud</p></a></div>
                
                <div className="box"><a target="_blank" href="https://www.google.com/"><img id="stitcher" src={require("./css/stitcher.png")}></img><p>Stitcher</p></a></div>
                
                <div className="box"><a target="_blank" href="https://open.spotify.com/show/2o4i9OCFtPNexR2yxiDUHw?si=JTeSEd7SRBOXqV4sh_j2dA"><img id="spotify" src={require("./css/spotify.png")}></img><p>Spotify</p></a></div>
                
            </div>
        </div>
    );
}