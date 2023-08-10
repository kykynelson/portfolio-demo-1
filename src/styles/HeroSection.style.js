import { styled } from "styled-components";


export const HeroSectionContainer = styled.section`
height: 100vh;
width: 100%;
overflow: hidden;
position: contain;
z-index: -1;
display: flex;
`;

export const VideoOverlay = styled.div`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: white;
text-align: center;
z-index:1;
`;