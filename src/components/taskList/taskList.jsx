import React,{ useEffect,useState,useContext }  from "react";
import styled from 'styled-components';
import Task from "./task/task";
import getListConfig from "../../utils/getListConfig";
import getTasks from "../../utils/getTasks";
import mapTasks from "../../utils/mapTasks";
import AddButton from "./addButton/addButton";
import ToDoContext from "../../hooks/toDoContext";

const TasksLists = () =>{
const { createTask,handleCreateTask,handleTask,tasks } = useContext(ToDoContext);
const [ pending,completed ] = getListConfig();
const [ data, setData ] = useState({Pending:[],Completed:[]});

    useEffect(()=>{
      const getContent = async () =>{
        const content = await getTasks();

        const tasks = mapTasks(content);
        const { Pending = [],Completed =[]} = tasks;

        handleTask({Pending,Completed});
        setData({Pending,Completed});
      }

      getContent();
    },[]);

    useEffect(()=>{
        const tasksFromContext = tasks;
        if(createTask)
        {
            const newPendingList = [ ...tasksFromContext.Pending,{id:'0',isNew:true} ];
            const tasks = {Pending:newPendingList, Completed:[]};
            setData(tasks);
            handleTask(tasks);
        }else{
            setData(tasks);
        }
        return ()=>{
            handleCreateTask(false);
        }
    },[createTask]);

    const renderTasks = (color,nextColor,tasks) =>(
        tasks.map(task=><Task key={task.id} color={color} nextColor={nextColor} data={task}/>)
    );
    return (
        data ?
        <TaskListContainer>
            {
            renderTasks(pending.color,completed.color,data.Pending)
        
            }
            <AddButton/>
            {
                renderTasks(completed.color,completed.color,data.Completed)
            } 
     
        </TaskListContainer>
        :
        <TaskListContainer>
            <AddButton/>
        </TaskListContainer>
       
    )

}

export default TasksLists;


const TaskListContainer = styled.div`
    margin: 7px;
    display:flex;
    border-radius: 4px;
   
    padding:10px;
    min-height:94vh;
    flex-direction:column;
`;