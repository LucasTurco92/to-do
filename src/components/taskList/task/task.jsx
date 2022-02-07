import React,{ useState,useRef,useEffect,useContext }  from "react";
import styled from 'styled-components';
import CheckButton from './checkButton/checkButton';
import AddNewTask from '../../../utils/addNewTask';
import ToDoContext from "../../../hooks/toDoContext";


const Task = ({color,nextColor,data}) =>{
    const { description,id,isNew } = data;
    const [ taskData, setTaskData ] = useState({ description,id,isNew });
    const { handleLastDescription,
            tasks,
            handleTask,
            handleCreateTask,
            handleBlockedButton,
            lastDescription } = useContext(ToDoContext);

    const fontSize = '1em';
    const ref = useRef();

    useEffect(()=>{
        if(taskData.isNew){
            ref.current.focus();
        }
    },[taskData.isNew])
    
    const handleOnBlur = async(e)=>{
        await validate(e);
    }
    const handleOnClick = async(e)=>{
        ref.current.value = (lastDescription) ? lastDescription : '';
    }
    const handleOnKeyPress = async(e)=>{
        if(e.key === 'Enter')await validate(e);
    }

    const validate = async (e) =>{
        const { value } = e.target;
        const tasksFromContext = tasks;

        if(!value?.trim().length){
            ref.current.focus();

        }else{
            const newId = await AddNewTask(value);

            handleLastDescription(value);
            const newTask={
                id: newId,
                description:value,
                isNew:false
            }

            const indexNewTask = tasksFromContext.Pending.findIndex(task=>task.id ==='0');
            tasksFromContext.Pending[indexNewTask] = {stateDescription:"Pending",description:value,id:newId.id,isNew:false};

            handleTask(tasksFromContext);
            handleCreateTask(false);
            setTaskData(newTask);
            handleBlockedButton(false);

        }
    };

    return (
        <TaskContainer>
            <CheckButton
            color={color}
            nextColor={nextColor}
            />
           {
            taskData.isNew ?
            <InsertDescription ref={ref} placeholder={lastDescription} onClick={()=>handleOnClick()} onBlur={(e)=>handleOnBlur(e)} onKeyPress={(e)=>handleOnKeyPress(e)} fontSize={fontSize}/>
            :
            <Description fontSize={fontSize}>
                {taskData.description}
            </Description>
            
            }
        </TaskContainer>
    )

}

export default Task;

const TaskContainer = styled.div`
    display: flex;
    vertical-align: top;
    border-radius: 4px;
    min-height:50px;
    width:100%;
    margin:2px;
    `;
    
    const Description = styled.p`
    font-size:${({fontSize}) =>fontSize};
    border-bottom: 1px solid var(--gray);
    margin:2px;
    padding:10px 0 0 0;
    width: calc(100% - 45px);
    word-wrap: break-word;
    align-self: baseline;
`
const InsertDescription = styled.input`
    margin:2px;
    width:100%;
    height:30px;
    white-space: initial;
    align-self: baseline;
    font-size:${({fontSize}) =>fontSize};
`