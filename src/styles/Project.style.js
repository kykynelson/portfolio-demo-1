import styled, { keyframes } from "styled-components";


export const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 25px;
`;

export const ProjectHeading = styled.h1`
font-size: 30px;
color: #000;

`;

export const PText = styled.p`
font-size: 20px;
color: #000;
text-align: center;
`;

export const rotateAnimation = keyframes `
from {
    transform: rotate(Odeg);
}
to {
    transform: rotate(360deg);
}
`;

export const RotatingImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 250px;
transition: transform 0.5s ease-in-out;

&:hover {
animation: ${rotateAnimation} 5s linear infinite;
}

img {
    width: 100%;
    height: 100%;
}
`;

export const BorderBox = styled.div`
border: 2px solid #d6cadd;

`;

export const ImageContainer = styled.div`
margin: 0;
`;

// export const ImageWithText = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// gap: 10px;
// `;

// export const CenteredContainer = styled.div`
// display: flex;
// align-items: center;
// `;

