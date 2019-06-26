import React from 'react';
import app from "firebase/app";
import 'firebase/firestore';


export class UploadForm extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            Title:"",
            Intro:"",
            Description:"",
            file:"",
            avatarURL:''
        })

        this.setRef = ref => {
            this.file = ref;
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleIntroChange = this.handleIntroChange.bind(this);
        
    }

    handleTitleChange(e){
        this.setState({
            Title: e.target.value
        });
    }

    handleIntroChange(e){
        this.setState({
            Intro: e.target.value
        })
    }

    handleDescriptionChange(e){
        this.setState({
            Description:e.target.value
        })
    }
    handleFileChange(e){
        const file1=this.file.files[0];
        
        this.setState({
            file:file1
        })
    }

    handleFormSubmit(){
        
        let db = app.firestore().collection("podcasts");
        db.get().then((function(docs){
            let storageRef = app.storage().ref();
            var metadata={
                contentType:'audio/mpeg'
            };
            var mainImage = storageRef.child('podcasts/', this.state.file.name);
            mainImage.put(this.state.file).then((snapshot) => {
                mainImage.getDownloadURL().then((url) => {
                    this.setState({
                        avatarURL: url,
                    })
                    
                })
            })
            
            db.doc("pod"+(1+docs.size)).update({
                "url": this.state.avatarURL
            })
            db.doc("pod"+(1+docs.size)).set({
                "title":this.state.Title,
                "intro":this.state.Intro,
                "description":this.state.Description,
                "url":""
            })
            
           
        })) 
        
    }              
    

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input placeholder="Title" type="text" value={this.state.Title} onChange={this.handleTitleChange} required />
                <input placeholder="Introduction" type="text"  value={this.state.Intro} onChange={this.handleIntroChange} required />
                <input placeholder="Description" type="text"  value={this.state.Description} onChange={this.handleDescriptionChange} required />
                
                <input placeholder="File" className="formBtn" type="file"  ref={this.setRef} onChange={this.handleFileChange} />
                <input className="formBtn" type="submit" />
            </form>
        );
    }
}