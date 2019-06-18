import React from 'react';


export class Landing extends React.Component{
render(){
    const backgroundStyle = {
        objectFit: 'cover',
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        zIndex: "-1",

    }

    return(
        <div>
        <div style={{
            width: '100%',
            minHeight: '100vh',
            overflow: 'hidden',
            position: 'relative',

        }}>
            <video 
                id="background-video" 
                loop 
                autoPlay 
                muted 
                style={backgroundStyle} 
                src={require("../../public/images/backgroundvid.mp4")} 
                type="video/mp4" />                               
                  
</div>  

<div style={{position: "absolute", justifyContent:'center', textAlign:'center', width: "100%", textShadow:"orange", top:"40%"}}>
        <h1 style={{color:'silver', fontSize:'9em'}}>The Golden Mean</h1>
        <h3 style={{color:'silver', }}>Swan Ye Htut - Timothy Scheuermann</h3>
            

</div>
</div>
)}}
