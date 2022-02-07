import axios from 'axios';
const endpoint = process.env.REACT_APP_PERFECT_CHANNEL_ENDPOINT;

const addNewTask = async (description) =>{
    const params = {Description:description};

    const { data } = await axios.post(`${endpoint}/addNewTask`,params);
    
    return data;
  }
  
export default addNewTask;