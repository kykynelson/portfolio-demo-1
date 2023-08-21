import styled from "styled-components";

export const AboutContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
text-align: center;
margin: 20px;
`;

export const AboutHeading = styled.h1`
font-size: 30px;
color: #000;
`;

export const PText = styled.p`
font-size: 20px;
color: #000;
margin-top: 20px;
`;

export const IconImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 250px;
animation: bounce 2s infinite;


img {
width: 250px;
height: 100px;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}
`;


