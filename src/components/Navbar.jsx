import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Intro from './Intro'
import Service from './Service'
const Container = styled.div`
    height: 50px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;

`

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline #fc8e2e;
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
    cursor: pointer;
    @media only screen and (max-width:480px){
        display: none;
    }
    @media only screen and (max-width:1000px){
        display: none;
    }
`

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;

`
const Button = styled.button`
    border: 2px solid #fff;
    padding: 10px 15px;
    background-color: #fc8e2e;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper id="home">
                <Left>
                <Logo>Genie Solutions</Logo>
                <Menu>
                    <MenuItem><a href='#home' style={{ "text-decoration": 'none', "color": "gray" }}>Home</a></MenuItem>
                    <MenuItem><a href='#features' style={{ "text-decoration": 'none', "color": "gray" }}>Features</a></MenuItem>
                    <MenuItem><a href='#services' style={{ "text-decoration": 'none', "color": "gray" }}>Services</a></MenuItem>
                    <MenuItem><a href='#pricing' style={{ "text-decoration": 'none', "color": "gray" }}>Pricing</a></MenuItem>
                    <MenuItem><a href='#contact' style={{ "text-decoration": 'none', "color": "gray" }}>Contact</a></MenuItem>
                </Menu>
                </Left>
                <Button><a href='#contact' style={{ "text-decoration": 'none', "color": "#fff" }}>Find A Solution</a></Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar
