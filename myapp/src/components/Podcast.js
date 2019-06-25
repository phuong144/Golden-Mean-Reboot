import React from 'react';
import app from "firebase/app";
import 'firebase/firestore';



export class Podcast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            url:"",
            intro:'',
            description:''
        }
        
    }       

    render(){
       
    
        let docRef = app.firestore().collection("podcasts").doc("pod"+this.props.num);
        docRef.get().then(function(doc){
            this.setState({
                title: doc.data().title,
                url: doc.data().url,
                intro: doc.data().intro,
                description: doc.data().description
            });
        }.bind(this));
            
        return (
            <div className="col-sm-6">
                <div className="box">
                <h3>{this.state.title}</h3>
                <audio
                    src={this.state.url}
                    
                    controls="controls"
                    className="audio"
                    typeof="audio/mpeg"
                    preload="none"
                    

                ></audio>
                <p>{this.state.intro}</p>
                <p>{this.state.description}</p>
            </div>
            </div>
        );                                    
    }

}