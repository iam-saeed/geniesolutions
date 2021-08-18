import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import styled from 'styled-components'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
height: 90%;
background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`
const Wrapper = styled.div`
height: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width:480px){
    flex-direction: column;
}
@media only screen and (max-width:1080px){
    flex-direction: column;
}


`

const Form = styled.form`
height: 250px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width:480px){
    flex-direction: column;
}
@media only screen and (max-width:1080px){
    flex-direction: column;
}
`

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;

    @media only screen and (max-width:480px){
        height: 50%;
        margin-right: 0px;
    }
    @media only screen and (max-width:1080px){
        height: 50%;
        margin-right: 0px;
    }
`

const RightForm = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media only screen and (max-width:480px){
    width: 50%
}
@media only screen and (max-width:1080px){
    width: 50%
}
`

const FormContainer = styled.div`
width: 50%;
@media only screen and (max-width:480px){
    width: 100%
}
@media only screen and (max-width:1080px){
    width: 100%
}
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 100px;
    margin-top: 0px;
    @media only screen and (max-width:480px){
        margin: 20px;
    }
    @media only screen and (max-width:1080px){
        margin: 20px;
    }
`

const Input = styled.input`
    width: 200px;
    padding: 20px;
    @media only screen and (max-width:480px){
        padding: 5px;
    }
    @media only screen and (max-width:1080px){
        padding: 5px;
    }
`
const TextArea = styled.textarea`
width: 200px;
height: 60%;
padding: 20px;
@media only screen and (max-width:480px){
    padding: 5px;
    margin-top: 15px;
    margin-left: -22px;
    margin-bottom: 10px;
}
@media only screen and (max-width:1080px){
    padding: 5px;
    margin-top: 15px;
    margin-left: -22px;
    margin-bottom: 10px;
}
`

const Button = styled.button`
    padding: 15px;
    border: none;
    background-color: #7ed957;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;
    opacity: 0.7;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width:480px){
        padding: 10px;
        font-size: 14px;
        margin-bottom: 20px;
        
    }
    @media only screen and (max-width:1080px){
        padding: 10px;
        font-size: 14px;
        margin-bottom: 20px;
        
    }
`


const AddressContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width:480px){
    width: 100%
    margin-top: 20px;
}
@media only screen and (max-width:1080px){
    width: 100%
    margin-top: 20px;
}
`

const AddressItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 50px;
@media only screen and (max-width:480px){
    margin-bottom: 20px;
}
@media only screen and (max-width:480px){
    margin-bottom: 20px;
}
`

const Icon = styled.img`
    display: flex;
    margin: 10px;
    align-items: center;
    width: 20px;
    @media only screen and (max-width:480px){
        width: 8%
    }
`
const Text = styled.span`
    font-size: 20px;
    display: flex;
    align-items: center;
    @media only screen and (max-width:480px){
        width: 100%
        font-size: 10px;
    }
`

const Span = styled.span`
display: flex;
justify-content: center;
margin-top: 20px;
color: green;
@media only screen and (max-width:480px){
    font-size: 10px;
    margin-bottom: 10px;
}
`

const Contact = () => {
    const [message, setMessage] = useState(false)
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_5mrvzqn', 'template_ix3c0hf', e.target, 'user_xchblEV1v8ayODY5oyQN5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setMessage(true)
      }
    return (
        <Container id='contact'>
            <Wrapper>
                <FormContainer>
                    <Title>Interested? <br /> Let's Get In Touch</Title>
                    <Form onSubmit={sendEmail}>
                    <LeftForm>
                        <Input placeholder="Your Name" name="name" />
                        <Input placeholder="Your Email" name="email"/>
                        <Input placeholder="Subject" name="subject" />
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder="Your Message" name="message" />
                        <Button>Send Message</Button>
                    </RightForm>
                    </Form>
                    {message && <Span>Thanks for connecting, we will be in touch within 24-48 business hours.</Span>}
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Text><Icon src={Map} />13872 Del Corso Way, Broomfield, Colorado</Text>
                        <AddressItem>
                        <Text><Icon src={Send}/>mygeniesolution@gmail.com</Text>
                        <Text><Icon src={Phone} />(307) 751 - 8352</Text>

                    </AddressItem>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact
