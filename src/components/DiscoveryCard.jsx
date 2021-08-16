import React from 'react';
import style from 'styled-components';
import search from '../img/search.png';
const Container = style.div`
    width: 100px;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    -webkit-box-shadow: 3px 3px 26px -2px rgba(0,0,0,0.4); 
box-shadow: 3px 3px 26px -2px rgba(0,0,0,0.4);
@media only screen and (max-width:480px){
    width: 50px;
}
`

const Image = style.img`
    width: 20px;
`

const Text = style.span`
    margin-top: 10px;
    text-align: center;
`
const Button = style.button`
width: 180px;
border: none; 
border-radius: 10px;
background-color: 
`

const DiscoveryCard = () => {
    return (
        <Container>
            <Image src={search} />
            <Text><b>Discovery</b></Text>
            <Text>We learn about your businesses goals and initiatives to better understand how we can bring value to your business. </Text>
        </Container>
    )
}

export default DiscoveryCard
