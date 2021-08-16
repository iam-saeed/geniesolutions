import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 10%;
    background-color: #fc8e2e;
    color: #fff;
`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`
const List = styled.ul`
padding: 0;
margin: 0;
list-style: none;
display: flex;
`
const ListItem = styled.li`
margin-right: 20px;

`
const Copyright = styled.span``

const Footer = () => {
    return (
        <Container>
        <Wrapper>
            <List>
                <ListItem>Guide</ListItem>
                <ListItem>Careers</ListItem>
            </List>
            <Copyright>Genie Solutions Ⓒ 2021</Copyright>
        </Wrapper> 
        </Container>
    )
}

export default Footer
