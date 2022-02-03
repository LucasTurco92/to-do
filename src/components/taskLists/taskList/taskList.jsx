import React  from "react";
import styled from 'styled-components';

const TaskList = ({title,color,data}) =>{

    return (
        <TaskListContainer>
            <Title color={color}>{title}</Title>
        </TaskListContainer>
    )

}

export default TaskList;

const TaskListContainer = styled.div`
    display: inline-block;
    margin: 0 4px;
    vertical-align: top;
    min-width: 300px;
    border-radius: 4px;
    background:var(--darkGray);
    min-height:50px;
`;


const Title = styled.div`
    border-radius: 4px;
    text-align: center;
    color:var(--white);
    background:${(props) => props.color };
    font-size:1.2em;
    padding:4px;
`;
