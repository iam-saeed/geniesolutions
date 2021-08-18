import React, { useState } from 'react'
import style from 'styled-components';
import How from '../img/how.png';
import DiscoveryCard from './DiscoveryCard';
import StrategyCard from './StrategyCard';
import SolutionCard from './SolutionCard';
import VideoPlay from '../img/video.mp4';
import Icon from '../img/play.png'

const Container = style.div`
display: flex;
height: 100%;
@media only screen and (max-width:480px){
    flex-direction: column;
    font-size: 12px;
}
@media only screen and (max-width:1080px){
    flex-direction: column;
    font-size: 12px;
}
`

const Image = style.img`
display: ${props => props.open && "none"};
height: 90%;
margin-left: -125px;
`

const Video = style.video`
display: ${props => !props.open && "none"};
height: 300px;
position: absolute;
top: 0;
bottom: 0;
right: 0;
margin: auto;
@media only screen and (max-width:480px){
    width: 100%;
}
@media only screen and (min-width:1080px){
    width: 100%;
}
`

const Left = style.div`
width: 50%;
position: relative;
margin-bottom: -125px;
@media only screen and (max-width:480px){
   display: none;
}
@media only screen and (max-width:1080px){
    display: none;
 }
`
const Right = style.div`
width: 50%;
@media only screen and (max-width:480px){
    width: 100%
}
@media only screen and (max-width:1080px){
    width: 100%
}
`
const Wrapper = style.div`
padding: 50px;
display: flex;
flex-direction: column;
@media only screen and (max-width:480px){
    padding: 20px;
}
@media only screen and (max-width:1080px){
    padding: 20px;
}
`
const Title = style.h1``

const Description = style.p`
font-size: 20px;
margin-top: 20px;
color: #555;
`

const CardContainer = style.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`
const Button = style.button`
width: 180px;
border: none; 
border-radius: 10px;
background-color: #7ed957;
opacity: 0.7;
color: white;
font-weight: bold;
font-size: 20px;
padding: 15px;
margin-top: 50px;
cursor: pointer;
display: flex;
align-items: center;
`

const IconImg = style.img`
width: 20px;
margin-right: 10px;
`

const Modal = style.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);

`
const CloseButton = style.button`
    position: absolute;
    background-color: #fff;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30%;
`


const Service = () => {
    const smallScreen = window.screen.width <= 480 ? true : false;
    const [open, setOpen] = useState(false)
    return (
        <Container id="services">
            <Left>
                <Image open={open} src={How} />
                <Video open={open} autoPlay controls src={VideoPlay} />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Description>
                        We provide innovative digital services to startups and small businesses looking to partner in their digital media, web design & development, lead generation, and communication requirements. <b>We work with you, not for you.</b> Although we have great resources to help you.
                    </Description>
                    <CardContainer>
                        <DiscoveryCard />
                        <StrategyCard />
                        <SolutionCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}><IconImg src={Icon}/>How it works</Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video open={open} autoPlay loop controls src={VideoPlay} />
                    <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Service
