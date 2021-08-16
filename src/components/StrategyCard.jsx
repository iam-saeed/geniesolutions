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
    @media only screen and (max-width:480px){
        font-size: 14px;
    }
`


const StrategyCard = () => {
    return (
        <Container>
            <Image src={search} />
            <Text><b>Strategy</b></Text>
            <Text>We put together a list of strategies, and a plan of execution to maximize earning potential.</Text>
        </Container>
    )
}

export default StrategyCard