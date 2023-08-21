import styled from "styled-components";


export const StyledContact = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #d6cadd;
padding: 20px;
`;

export const ContactForm = styled.form`
border: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px;
width: 400px;
`;

export const ContactHeading = styled.h1`
font-size: 35px;
margin-bottom: 20px;
color: #000;
justify-content: flex-start;
align-items: flex-start;
`;

export const ContactLabel = styled.label`
margin-bottom: 10px;
color: #b39ddb;
`;

export const CustomInput = styled.input`
width: 100%;
padding: 15px;
margin-bottom: 15px;
border: none;
border-radius: 5px;
background-color:  #b39ddb;
::placeholder {
color: #000;
}
`;

export const CustomTextarea = styled.textarea`
width: 100%;
padding: 25px;
margin-bottom: 15px;
border: none;
border-radius: 5px;
background-color:  #b39ddb;
::placeholder {
    color: #000;
}
`;

export const SubmitButton = styled.button`
background-color: #b39ddb;
color: white;
padding: 10px 20px;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
align-self: flex-end;

@media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
}
`;