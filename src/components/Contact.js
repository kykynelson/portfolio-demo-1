import React from "react"
import { StyledContact, ContactForm, ContactLabel, ContactHeading, CustomInput, CustomTextarea, SubmitButton } from "../styles/Contact.style";

const Contact = () => {
return (
    <StyledContact>
    <ContactForm>
        <ContactHeading>Contact Me</ContactHeading>
        <ContactLabel>Name</ContactLabel>
        <CustomInput type="text" name="Full Name" id="" placeholder='Enter name'/>
        <ContactLabel>Email</ContactLabel>
        <CustomInput type="email" name="Email Address" id="" placeholder='Enter email'/>
        <ContactLabel>Message</ContactLabel>
        <CustomTextarea name="Message" id="" cols="30" rows="10" placeholder= 'type your message here...' />
        <SubmitButton type="submit">Submit</SubmitButton>
    </ContactForm>
    </StyledContact>
)
}

export default Contact;
