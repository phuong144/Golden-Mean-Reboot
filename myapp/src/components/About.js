import React from 'react';
import {Banner} from './Banner';
import {ScrollToTopOnMount} from './ScrollToTopOnMount';


export class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    handleClick(){
        alert('Tim and Swan have the same birthday!')
    }

    render(){

        

        return (
            <div id="Page3">
                <ScrollToTopOnMount />
                <Banner />

                <br></br><br></br>
                
                <div id="funfact" className="container-fluid" style={{height:'40rem', backgroundImage:"url('../images/background1.jpg')", backgroundAttachment:'fixed', backgroundRepeat:'no-repeat' }}>
                    
                
                </div>
                <h4 style={{justifyContent:'center', textAlign:'center', bottom:'0'}}><button onClick={this.handleClick}>Fun Fact</button></h4>

                <h1 className="hosts" style={{textAlign: "center", marginTop: '8rem', fontSize:'4rem'}}>Meet our hosts!</h1>
                <br></br>
                <div className="container" style={{justifyContent:'center', textAlign:'center'}}>
                <div className="row">
                    <div className="col-sm-5 col-sm-offset-1">
                        <div className="block">
                            <div className="thumbnail">
                                <img src="images/Swan2.jpg" alt="" className="img-rounded img-responsive pics"/>
                            </div>
                            <h3>Swan Ye Htut</h3>
                            <h5>Email: swanyehtut91920@gmail.com</h5>
                            <h4>Swan is a Global Studies major studying at UCLA! He immigrated to the United States from his home country
                            of Myanmar (Burma) at the age of 8. In high school, he was very active in the volunteer club of Interact.
                            Now at UCLA, his involvements include being on a dance team, serving on his dorm’s government council and
                            acting as a Cub Tour Guide for K-8 students. In his free time, he likes to play video games and dance!</h4>
                        </div>
                    </div>

                    <div className="col-sm-5">
                        <div className="block">
                            <div className="thumbnail">
                                <img src="images/Tim1.jpg" className="img-rounded img-responsive pics" alt=""/>
                            </div>
                            <h3>Timothy Scheuermann</h3>
                            <h5>Email: timothyscheuermann@gmail.com</h5>
                            <h4>Timothy is an Industrial Engineering major at Cal Poly who has interests in sports, philosophy and politics.
                            He is a member of Intervarsity Christian Fellowship, plays goalie on intramural soccer team and runs in his
                            free time. In high school, he could run a mile in 4:29.</h4>
                        </div>
                    </div>
                </div>

                

            

                </div>
            
            </div>
        
        );
    }

}
