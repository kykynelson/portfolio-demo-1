import React from "react"
import videoBg from "../assets/videoBg.mp4"
import { HeroSectionContainer, VideoOverlay } from "../styles/HeroSection.style"

const HeroSection = () => {
return (
    <HeroSectionContainer>
        <video src={videoBg} autoPlay loop muted>
            </video>
    <VideoOverlay>
    <div>
        <h1>HI</h1>
        <h2>I'm Kya Drummond</h2>
        <h3>A web developper</h3>
    </div>
    </VideoOverlay>
    </HeroSectionContainer>  
)
}

export default HeroSection;

