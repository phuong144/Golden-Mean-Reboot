import React from 'react';

export class UploadForm extends React.Component{
    constructor(props){
        super(props);
        this.state=({

        })
    }

    render(){
        return(
            <form action="#">
                <input placeholder="Title" type="text" required />
                <input placeholder="Introduction" type="text" required />
                <input placeholder="Description" type="text" required />
                
                <input placeHolder="File" class="formBtn" type="file" />
                <input class="formBtn" type="submit" />
            </form>
        );
    }
}