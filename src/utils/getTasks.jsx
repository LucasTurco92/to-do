import axios from 'axios';
const endpoint = process.env.REACT_APP_PERFECT_CHANNEL_ENDPOINT;

const getTasks = async () =>{
    const { data } = await axios.get(`${endpoint}/task`);
    
    return data;
  }
  
export default getTasks;