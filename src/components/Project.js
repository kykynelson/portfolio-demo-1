import React from "react"
import { ProjectContainer, PText, ProjectHeading, RotatingImage, BorderBox, ImageContainer  } from "../styles/Project.style"
import NyanCatImage from "../assets/Screenshot 2023-08-20 at 5.09.45 PM.png";
import NewProjectImage from "../assets/new projects.jpeg";


function Project() {
return (
    <ProjectContainer>
    <ProjectHeading>Projects</ProjectHeading>
    {/* <CenteredContainer> */}
        {/* <ImageWithText> */}
    <PText> These are some of the projects I have worked on so far: </PText>
    <BorderBox>
    <RotatingImage>
        <img src={NyanCatImage} alt="Nyan Cat" />
    </RotatingImage>
    </BorderBox>
    <PText>
    Created a game called Nyan Cat where the burger attempts to dodge the cats,
        and with every cat that is dodged, the score increases.
    </PText>
    <ImageContainer>
    <BorderBox>
    <RotatingImage>
    <img src={NewProjectImage} alt="New Projects" />
    </RotatingImage>
    </BorderBox>
    </ImageContainer>
    {/* </ImageWithText> */}
    {/* </CenteredContainer> */}
    </ProjectContainer>
)
}

export default Project;


// style={{ width: "200px", height: "200px" }} />