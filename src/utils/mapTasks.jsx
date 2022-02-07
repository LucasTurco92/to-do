
const mapTasks = (tasksResponse) =>{
    const { tasks = [] } = tasksResponse;

    const allStates = tasks.map(x=> x.stateDescription);

    const states = allStates.filter((v, i, a) => a.indexOf(v) === i);
    
    const taskResult =  states.map(state=>{
        return {
            [state]:tasks.filter(task=> task.stateDescription === state)
        };
    });

    return (taskResult?.length > 0) ? taskResult.reduce((a, v) => ({ ...a, [v]: v})) : taskResult;
 
}
  
export default mapTasks;