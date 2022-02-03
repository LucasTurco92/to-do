import React from "react";
import Header from "../components/header/header";
import TasksLists from '../components/taskLists/taskLists';
const Home = () =>{
    
    return (
        <div>
            <Header title="To-Do"/>
            <TasksLists/>
        </div>
    )

}

export default Home;