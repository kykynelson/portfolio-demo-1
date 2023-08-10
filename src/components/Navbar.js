import React, {useState} from "react";
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendesContainer,  NavbarLinkContainer, NavbarLink, OpenLinksButton, NavbarLinkExtended } from "../styles/Navbar.style";



function Navbar() {

    const [extendNavbar, setExtendNavbar] = useState(false);
return  (
<NavbarContainer extendNavbar={extendNavbar}>
    <NavbarInnerContainer>
    <LeftContainer></LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>
            <NavbarLink to="/Contact">Contact</NavbarLink>
            <OpenLinksButton onClick={() => {
                setExtendNavbar((curr) => !curr);
            }}> 
                {extendNavbar ? <> &#10005;</> : <>&#8801;</>}
                </OpenLinksButton>
        </NavbarLinkContainer>
        </RightContainer>
    </NavbarInnerContainer>    
    {extendNavbar && (
    <NavbarExtendesContainer>
            <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
            <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
            <NavbarLinkExtended to="/Contact">Contact</NavbarLinkExtended>
    </NavbarExtendesContainer>
    )}
</NavbarContainer>
)
}

export default Navbar;
