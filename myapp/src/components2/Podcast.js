import React from 'react';
import app from "firebase/app";
import 'firebase/firestore';
import './css/Podcast.css';


export class Podcast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            url:"",
            intro:'',
            description:'',
            date:'',
            id:'',
            even:'',
        }      
    }       

    componentDidMount(){
        let docRef = app.firestore().collection("podcasts").doc("pod"+this.props.num);
        docRef.get().then(function(doc){
          
            
            //console.log(Id);
            this.setState({
                title: doc.data().title,
                url: doc.data().url,
                intro: doc.data().intro,
                description: doc.data().description,
                id:this.props.num,
                even:this.props.num % 2 == 0 ? true:false,
            });
        }.bind(this));
    }

    render(){
       
    
       
            
        if(!this.state.even){

        
            return (
                
                <div id="podcast" style={{background:"#D3D3D3"}}>
                    <div id="Podnum" style={{background:"#2D2F3E"}}>
                        <p style={{color:"#FFFFFF"}}>{this.state.id}</p>
                    </div>
                    <div id="right">
                        <p id="Intro">{this.state.intro}</p>
                        <p id="Description">{this.state.description}</p>
                        <audio
                            src={this.state.url}                    
                            controls="true"
                            id="Audio"
                            
                            typeof="audio/mpeg"
                            preload="none"
                            

                        ></audio>
                    </div>
                </div>
            );  
        }else{
            return (
                
                <div id="podcast">
                    <div id="Podnum">
                        <p>{this.state.id}</p>
                    </div>
                    <div id="right">
                        <p id="Intro">{this.state.intro}</p>
                        <p id="Description">{this.state.description}</p>
                        <audio
                            src={this.state.url}                    
                            controls="true"
                            id="Audio"
                            
                            typeof="audio/mpeg"
                            preload="none"
                            

                        ></audio>
                    </div>
                </div>
            );  
        }                                 
    }

}