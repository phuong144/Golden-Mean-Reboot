import React from 'react';

export class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        const parentContainerStyles = {
            backgroundColor: 'khaki',
            marginTop: '8rem'
        };

        return (
            <div className="container-fluid about" id="about" style={parentContainerStyles}>
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-2">
                    <img src={require("../../public/images/Logo.jpg")} className="img-responsive aboutpic" style={{width: '30em', height: '30em'}}/>
                    </div>
                    <div className="col-sm-5">
                    <br></br>
                    <h2><b><i>The Golden Mean</i></b></h2>
                    <h3>The Golden Mean or Doctrine of the Mean by Aristotle is the idea that ethical values should result from a
                        balance (or mean) between two vices. We thought it’d be perfect for us considering we have different opinions
                        on how the world works but through productive discussion, arrive at a better understanding of the topic. </h3>
                    <br></br>
                    <h5>Credit to Vania Gunawan for designing our logo</h5>
                    </div>
                </div>
            </div>
        
        );
    }

}
