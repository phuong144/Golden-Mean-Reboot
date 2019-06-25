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
            file:[]
        })
        this.handleFormSubmit.bind(this)
        this.handleDescriptionChange.bind(this)
        this.handleFileChange.bind(this)
        this.handleFormSubmit.bind(this)
        this.handleIntroChange.bind(this)
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
        this.setState({
            file:[e.target.value]
        })
    }

    handleFormSubmit(){
        let db = app.firestore().collection("podcasts");
        db.get().then(function(docs){
            let storageRef = app.storage().ref();
            var metadata={
                contentType:'audio/mpeg'
            };
            var uploadTask = storageRef.child('podcasts/' + this.state.file.name).put(this.state.file, metadata);
            uploadTask.on(app.storage.TaskEvent.STATE_CHANGED,
            function(snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case app.storage.TaskState.PAUSED:
                console.log('Upload is paused');
                break;
                case app.storage.TaskState.RUNNING:
                console.log('Upload is running');
                break;
            }
            },
            function(err) {
            console.log("Error: ", err);
            },
            function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {

            db.doc("pod"+(1+docs.size)).update({
                "url": downloadURL
            })
            
            


            })
            });

            db.doc("pod"+(1+docs.size)).set({
                "title":this.state.Title,
                "intro":this.state.Intro,
                "description":this.state.Description,
                "url":""
            })
            })

        
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input placeholder="Title" type="text" onChange={this.handleTitleChange} required />
                <input placeholder="Introduction" type="text"  onChange={this.handleIntroChange} required />
                <input placeholder="Description" type="text"  onChange={this.handleDescriptionChange} required />
                
                <input placeholder="File" className="formBtn" type="file" onChange={this.handleFileChange} />
                <input className="formBtn" type="submit" />
            </form>
        );
    }
}