import React from 'react';
import app from "firebase/app";
import 'firebase/firestore';
import FileUploader from 'react-firebase-file-uploader';



export class UploadForm extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            Title:"",
            Intro:"",
            avatar:'',
            Description:"",
            isUploading: false,
            progress: 0,
            avatarURL:'',
            podSize:0,
        })
        
        let db = app.firestore().collection("podcasts");
        db.get().then((function(docs){
            this.setState({
                podSize:docs.size
            })
            console.log("init podSize " + this.state.podSize)
        }.bind(this)))

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleIntroChange = this.handleIntroChange.bind(this);
        
    }

    handleTitleChange(e){        
        this.setState({
            Title: e.target.value,              
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

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        app
        .storage()
        .ref("podcasts")
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({ avatarURL: url })
        
        );
    };

    handleFormSubmit(){
        console.log("In form submit function");
        let db = app.firestore().collection("podcasts");
        db.get().then((function(docs){                    
            db.doc("pod"+(1+docs.size)).set({             
                title:this.state.Title,
                intro:this.state.Intro,
                description:this.state.Description,
                url:""
            })
            console.log("set doc")
            db.doc("pod"+(1+docs.size)).update({
                url: this.state.avatarURL
            })                  
        }.bind(this)) )
        alert('Upload Successful!');      
    }                 

    render(){
        return(
            <form>
                <input placeholder="Title" type="text" value={this.state.Title} onChange={this.handleTitleChange} required />
                <input placeholder="Introduction" type="text"  value={this.state.Intro} onChange={this.handleIntroChange} required />
                <input placeholder="Description" type="text"  value={this.state.Description} onChange={this.handleDescriptionChange} required />
                
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}

                <FileUploader
                    accept="audio/mpeg"
                    name="avater"
                    
                    storageRef={app.storage().ref("podcasts")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                />
                <button onClick={this.handleFormSubmit} className="formBtn" type="button" >Submit</button>
            </form>
        );
    }
}