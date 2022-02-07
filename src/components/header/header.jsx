import React  from "react";
import styled from 'styled-components';

const Header = ({title}) =>{
   
    return (
        <HeaderContainer>
            <img src='logo192.png'/><Title>{title}</Title>
        </HeaderContainer>
    )

}

export default Header;

const HeaderContainer = styled.div`
    display:flex;
    border-radius: 4px;
    align-content: baseline;
    justify-content: center;
    background:var(--lightBlue);
    margin:7px;
    img{
        filter: drop-shadow(0 0 .5em var(--white));
        height:35px;
    }
`
const Title = styled.span`
    color: #fff;
    font-family: sans-serif;
    font-size: 2em;
    align-self: center;
    font-family:emoji;
    user-select: none; 
`
