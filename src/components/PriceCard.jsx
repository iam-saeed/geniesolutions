import React from 'react'
import { Link } from 'react-router-dom';
import style from 'styled-components'

const Container = style.div`
    margin-right: 50px;
    padding: 20px;
    -webkit-box-shadow: 3px 3px 26px -2px rgba(0,0,0,0.4); 
    box-shadow: 3px 3px 26px -2px rgba(0,0,0,0.4);
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width:480px){
        margin-right: 0;
        margin-bottom: 10px;
        padding: 10px;
    }
    @media only screen and (max-width:1080px){
        margin-right: 0;
        margin-bottom: 10px;
        padding: 10px;
    }
    
`
const PriceContainer = style.div`
display: flex;
align-items: center;
`
const Price = style.span`
font-weight: bold;
font-size: 50px;
@media only screen and (max-width:480px){
    font-size: 30px;
}
@media only screen and (max-width:1080px){
    font-size: 30px;
}
`
const Type = style.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid #fc8e2e;
    color: #fc8e2e;
    background-color: #fff;
    @media only screen and (max-width:480px){
        display: none;
    }
    @media only screen and (max-width:1080px){
        display: none;
    }
`
const List = style.ul`
list-style: none;

`
const ListItem = style.li`
    margin: 30px 0;
    @media only screen and (max-width:480px){
        margin: 10px;
    }
`
const Button = style.button`
    border: none;
    background-color: #fc8e2e;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (max-width:480px){
        font-size: 12px;
        padding: 8px;
    }
    @media only screen and (max-width:1080px){
        font-size: 12px;
        padding: 8px;
    }
`

const PriceCard = ({ price, type, f1, f2, f3, f4, f5 }) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
                <Type>{type} Plan</Type>
                <List>
                    <ListItem>{f1}</ListItem>
                    <ListItem>{f2}</ListItem>
                    <ListItem>{f3}</ListItem>
                    <ListItem>{f4}</ListItem>
                    <ListItem>{f5}</ListItem>
                </List>
                <Button><a href='#contact' style={{ "text-decoration": 'none', "color": "#fff" }}>Join Now</a></Button>
        </Container>
    )
}

export default PriceCard
  