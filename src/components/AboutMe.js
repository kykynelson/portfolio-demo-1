import React from "react"
import { AboutContainer, AboutHeading, PText, IconImage } from "../styles/AboutMe.style";
import IconsImage from "../assets/Icons.png"




const AboutMe = () => {
return (
    <AboutContainer>
        <AboutHeading>About Me</AboutHeading>
        <PText>
        I am a dedicated web developer with a profound fascination for the intricacies of website creation. My passion lies in acquiring and mastering new skills, continually expanding my knowledge, and eagerly embracing fresh challenges. My experience encompasses proficiency in the following technologies:
        </PText>
        <IconImage>
            <img src={IconsImage} alt="Icons" />
        </IconImage>
        </AboutContainer>
)
}

export default AboutMe;
