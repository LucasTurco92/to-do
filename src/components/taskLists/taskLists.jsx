import React,{ useEffect }  from "react";
import styled from 'styled-components';
import TaskList from "./taskList/taskList";
import getListConfig from "../../utils/getListConfig";
import getTasks from "../../utils/getTasks";

const TasksLists = () =>{
    useEffect(()=>{
      const getContent = async () =>{
        const content = await getTasks();
      }

      getContent();
    },[]);

    return (
        <TaskListsContainer>
            {
                getListConfig().map(x=>(
                    <TaskList
                        title={x.title} 
                        color={x.color}
                        key={x.title}/>
                    )
                )
            }
        </TaskListsContainer>
    )

}

export default TasksLists;


const TaskListsContainer = styled.div`
    margin: 7px;
    background:var(--gray);
    border-radius: 4px;
    overflow-x:auto;
    white-space:nowrap;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding:10px;
    height:94vh;
`;