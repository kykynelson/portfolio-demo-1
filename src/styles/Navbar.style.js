import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
width: 100%;
height: ${(props) => (props.extendNavbar ? "100vh" : "45px")};
background-color: #563c5c;
display: flex;
flex-direction: column;

@media (min-width: 700px) {
    height: "45px";
}
`;

export const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;

`;

export const RightContainer = styled.div`
flex: 30%;
display: flex;
justify-content: flex-end;
padding-left: 50px;

`;

export const NavbarInnerContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
`;

export const NavbarLinkContainer = styled.div`
display: flex;
`
export const NavbarLink = styled(Link)`
color: #000;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;

@media (max-width: 700px) {
    display: none;
}
`;

export const NavbarLinkExtended = styled(Link)`
color: white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
`;

export const OpenLinksButton = styled.button`
width: 70px;
height: 50px;
border: none;
color: black;
font-size: 45px;
cursor: pointer;

@media (min-width: 700px) {
    display: none;
}
`;

export const NavbarExtendesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
    display: none;
}
`;

//#dfb0f7 - light purple

// #a876d2 - dark purple
// color: #47057e; -writing
