import React from 'react';
import app from "firebase/app";
import 'firebase/firestore';
import {Podcast} from './Podcast';

export class PodcastPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMore:false,
            button:'Show More',
            docSize: 0
        }
        this.showMore.bind(this);
        
    }

    showMore(){
        this.setState({
            showMore: true,
            button:"Show Less"
        })
    }
    
    render(){
        let rows = [];
        let docRef = app.firestore().collection("podcasts");
        docRef.get().then(function(doc){
            this.setState({
                docSize: doc.size
            })
        }.bind(this));
            
        for(let i=this.state.docSize; i>0; i--){
            rows.push(<Podcast num={i} key={i} />)
        }           
        
        return(
            
            <div className="row" style={{justifyContent:"center", textAlign: "center", marginTop: '8rem'}}>
                {rows} 
            </div>
            

        );
        
        
    }

}