import React from 'react'
import styled from 'styled-components'
import Woman from '../img/Woman.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
height: calc(  100vh - 50px);
display: flex;
padding: 20px;
@media only screen and (max-width: 480px){
    flex-direction: column;
}
@media only screen and (max-width: 1080px){
    flex-direction: column;
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 60%;
@media only screen and (max-width:480px){
    width: 100%;
    height: 100%;
}
@media only screen and (max-width:1080px){
    width: 100%;
    height: 100%;
}
`
const Title = styled.h1`
width: 60%;
font-size: 60px;
@media only screen and (max-width:480px){
    font-size: 50px;
    width: 100%
}
@media only screen and (max-width:1080px){
    font-size: 50px;
    width: 100%
}
`
const Description = styled.p`
width: 60%;
font-size: 20px;
margin-top: 20px;
@media only screen and (max-width:480px){
    width: 100%
}
@media only screen and (max-width:1080px){
    width: 100%
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
        margin-bottom: 20px;
    }
    @media only screen and (max-width:1080px){
        margin-bottom: 20px;
    }
`
const Contact = styled.div`
display: flex;
flex-direction: column;

`
const Phone = styled.span`
color: #fc8e2e;
font-weight: bold;
@media only screen and (max-width:480px){
    color: black;
}
@media only screen and (max-width:1080px){
    color: black;
}
`
const ContactText = styled.span`
color: gray;
@media only screen and (max-width:480px){
    color: black;
}
@media only screen and (max-width:1080px){
    color: black;
}
`

const Info = styled.div`
width: 60%;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: space-between;
@media only screen and (max-width:480px){
    width: 100%;
    flex-direction: column;
}
@media only screen and (max-width:1080px){
    width: 100%;
    flex-direction: column;
}
`

const Right = styled.div`
width: 40%;
height: 100%;
margin-bottom: -125px;
@media only screen and (max-width:480px){
    display: none;
}
    @media only screen and (max-width:1080px){
    display: none;
    }
`

const Image = styled.img`
width: 100%;

`

const Intro = () => {
    return ( 
        <Container>
            <Left>
                <Title>A Magic Solution</Title>
                <Description>
                    We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.
                </Description>
                <Info>
                    <Button> <a href='#contact' style={{ "text-decoration": 'none', "color": "#fff" }}>Find A Solution</a></Button>
                    <Contact>
                        <Phone>Call Us (307) 751 - 8352</Phone>
                        <ContactText>For any questions, or concerns</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right><Image src={Woman} /></Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro
