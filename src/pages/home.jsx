import React from "react";
import Header from "../components/header/header";
import TasksList from '../components/taskList/taskList';
import {ToDoProvider} from "../hooks/toDoContext";
const Home = () =>{
    
    return (
        <ToDoProvider>
            <Header title="To-Do"/>
            <TasksList/>
        </ToDoProvider>
    )

}

export default Home;