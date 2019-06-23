import React from 'react';
import firebase from "firebase";

export class Podcast extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let db = firebase.firestore().collections("podcasts");
        let document = db.doc("pod"+this.props.i).get();
            return (
            
                <div className="col-sm-6">
                    <div className="box">
                        <h3>{document.data().title}</h3>
                        <audio 
                            id="audio" 
                            controls="controls" 
                            className="audio" 
                            src={document.data().url} 
                            typeof="audio/mpeg" 
                            preload="none" 
                            onPlay="logInfo()" 
                            onLoadedData="playAudio(this)">
                        </audio>
                        <p>{document.data().intro}</p>
                        <p>{document.data().description}</p>
                    </div>
    
                </div>
            
            
            );
        

        
    }

}