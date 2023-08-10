import React from "react"
import videoBg from "../assets/videoBg.mp4"
import { HeroSectionContainer, VideoOverlay } from "../styles/HeroSection.style"

const HeroSection = () => {
return (
    <HeroSectionContainer>
        <video src={videoBg} autoPlay loop muted>
            </video>
    <VideoOverlay>
        <h1>My name is Kya Drummond</h1>
    </VideoOverlay>
    </HeroSectionContainer>  
)
}

export default HeroSection;

