import React from 'react'
import style from 'styled-components'
import PriceCard from './PriceCard'

const Container = style.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width:480px){
    flex-direction: column;
} 
@media only screen and (max-width:1080px){
    flex-direction: column;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
} 
`

const Price = () => {
    return (
        <Container id="pricing">
            <PriceCard price="599.99" type="Silver" f1="SEO" f2="Email Marketing" f3="Social Influence" />
            <PriceCard price="999.99" type="Gold" f1="SEO" f2="Email Marketing" f3="Social Influence" f4="Consultation"/>
            <PriceCard price="1499.99" type="Diamond" f1="SEO" f2="Email Marketing" f3="Social Influence" f4="Consultation" f5="Design & Development"/>
        </Container>
    )
}

export default Price
