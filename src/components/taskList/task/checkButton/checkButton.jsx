import React  from "react";
import styled from 'styled-components';

const CheckButton = ({color,nextColor}) =>{
    return ( <CheckButtonContainer color={color}/> )

}

export default CheckButton;


const CheckButtonContainer = styled.div`
    border-radius: 50px;
    margin-right:7px;
    border:${({color}) => `2px solid ${color}`};
    height:35px;
    width:35px;
`;
    
