import React,{ useState,useContext }  from "react";
import styled from 'styled-components';
import ToDoContext from "../../../hooks/toDoContext";

const AddButton = () =>{
    const { handleCreateTask,blockedButton,handleBlockedButton } = useContext(ToDoContext);
    const handleClick=() =>{
        handleCreateTask(true);
        handleBlockedButton(true);
    }

    return (
        !blockedButton ?
        <AddButtonContainer onClick={()=>handleClick()}>
            <Content>+</Content>
        </AddButtonContainer>
        :<></>
    )
}

export default AddButton;

const AddButtonContainer = styled.div`
    background: var(--white);
    cursor:pointer;
    border-radius: 10%;
    position: relative;
    height:75px;
    width:110px;
    border:2px solid var(--lightBlue);
    color:var(--lightBlue);
    display:flex;
    justify-content:center;
    overflow: hidden;
    margin:7px;
    &:hover{
        color:var(--orange);
        border:2px solid var(--orange);
    }
    align-self:center;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--lightBlue);
        transform: translateY(-100%);
        transition: all .5s;
        z-index: 1;
        opacity: 0;
        border-radius: 0px 0px 20px 20px;
    }
    &:hover::before {
        transform: translateY(100%);
        opacity: 1;
    }
    @media (max-width: 800px) {
        background:var(--white);
    }
`;
    
const Content = styled.span`
    font-size:3em;
    height:70px;
    align-self:center;
    user-select: none; 
`