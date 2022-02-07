import React, {createContext,useState} from 'react';

const ToDoContext = createContext({});

const ToDoProvider  = ({children}) => {
    const [ lastDescription, setLastDescription] = useState();
    const [ tasks,setTask ] = useState();
    const [ createTask,setCreateTask ] = useState();
    const [ blockedButton,setBlockedButton ] = useState(false);
    
    const handleCreateTask = (invoked) =>{
        setCreateTask(invoked);
    }
    const handleTask = (newTasks) =>{
        setTask(newTasks)
    }
    const handleLastDescription = (newLastDescription) =>{
        setLastDescription(newLastDescription)
    }
    const handleBlockedButton = (block) =>{
        setBlockedButton(block)
    }

    
     return (
        <ToDoContext.Provider value={{ 
            handleLastDescription,
            lastDescription,
            handleCreateTask,
            createTask,
            handleTask,
            tasks,
            handleBlockedButton,
            blockedButton}}>
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContext;

export {ToDoProvider};