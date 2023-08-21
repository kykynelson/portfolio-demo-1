import { styled } from "styled-components";


export const HeroSectionContainer = styled.section`
height: 100vh;
width: 100%;
overflow: hidden;
position: contain;
display: flex;
font-family: 'Pacifico', cursive;
`;

export const VideoOverlay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
color: white;

h1 {
    font-size:55px;
    text-align: left;
}

h2 {
    font-size: 24px; 
}

h3 {
    font-size: 20px; 
}
`;
