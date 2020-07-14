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
