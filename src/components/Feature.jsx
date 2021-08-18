import React from 'react'
import style from 'styled-components'
import App from '../img/app.png'

const Container = style.div`
display: flex;
@media only screen and (max-width:480px){
   flex-direction: column;
   padding: 30px 20px;
}
@media only screen and (max-width:1080px){
    flex-direction: column;
    padding: 30px 20px;
 }
`
const Left = style.div`
width: 50%;
@media only screen and (max-width:480px){
    display: none;
}
@media only screen and (max-width:1080px){
    display: none;
}
`
const Right = style.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 30px;
@media only screen and (max-width:480px){
    width: 100%
}
@media only screen and (max-width:1080px){
    width: 100%
}
`

const Image = style.img`
height: 100%;
width: 80%;
height: 40vw;
`
const Title = style.span`
font-size: 70px;
@media only screen and (max-width:850px){
    font-size: 50px;
}
@media only screen and (max-width:1080px){
    font-size: 40px;
}
`
const SubTitle = style.span`
margin-top: 30px;
font-size: 24px;
font-style: italic;
color: #333;
@media only screen and (max-width:480px){
    width: 100%;
}
@media only screen and (max-width:1080px){
    font-size: 20px;
    font-size: 20px;
}
`

const Description = style.p`
font-size: 20px;
color: #777;
margin-top: 30px;
@media only screen and (max-width:480px){
    font-size: 18px;
   
}
@media only screen and (min-width:1080px){
    font-size: 20px;
    margin-left: 40px;
}

`
const Button = style.button`
width: 150px;
border: none;
padding: 15px 20px;
background-color: #fc8e2e;
color: #fff;
font-weight: bold;
font-size: 20px;
border-radius: 20px;
margin-top: 20px;
cursor: pointer;
@media only screen and (min-width:1000px){
    font-size: 14px;
    margin-left: 40px;
}
`

const Feature = () => {
    return (
        <Container id="features">
            <Left><Image src={App} /></Left>
            <Right>
                <Title>
                <b>good</b> design<br />
                <b>good</b> business 

                </Title>
                <SubTitle>We know that good design means good business. </SubTitle>
                <Description>We help our clients succeed by creating a brand identity, a world class digital experience, and marketing outreach to achieve goals.</Description>
                <Description>We care about your business, and guarantee your suceess. That's why we offer a free month trial.</Description>
                <Button><a href='#contact' style={{ "text-decoration": 'none', "color": "#fff" }}>Learn More</a></Button>
            </Right>
        </Container>
    )
}

export default Feature
