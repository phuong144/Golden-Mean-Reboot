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
            docSize: 0,
            docDisplay:0,
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
        
        return(
            

            <div style={{marginTop: '8rem'}}>
                <h1 style={{justifyContent:"center", textAlign:'center', fontSize:'4rem'}}>Podcasts</h1>    
            
                <div style={{marginTop: '3rem'}}>
                    {rows} 
                </div>
                <div style={{textAlign:'center'}}>
                    <button onClick={this.handleClick.bind(this)} style={{margin:'auto'}} >{this.state.button}</button>
                </div>
            </div>
            

        );
        
        
    }

}