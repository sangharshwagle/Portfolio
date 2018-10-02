import React from 'react';
import ReactPlayer from 'react-player';
import classes from './Video.css';
import LazyHero from "react-lazy-hero";
const video = () => {
    return ( <div className = {classes.HeroVideo}>
        <ReactPlayer url = "https://www.youtube.com/embed/4DAbnHv6VHs"
                        playing = {true}
                        loop = {true}
                        volume = {0}
                        muted = {true}
                        controls = {false}
                        width = {"1400px"}
                        height = {"500px"}/>
        <div>
            <LazyHero  imageSrc = "https://cdn.pixabay.com/photo/2014/12/29/17/39/code-583073_960_720.jpg" 
                    style = {{width:"1400px",
                              height:"500px",   
                              transform: "translateY(-100%)",
                              opacity: "0.9",}}>
                    <h1>Short info goes here</h1>
                    </LazyHero>
        </div>
    </div>  
    )
}

export default video;
