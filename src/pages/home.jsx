import React,{ useState,useEffect}  from "react";
import axios from 'axios';

const Home = () =>{
    const [ data,setData ] = useState();
    const endpoint = process.env.REACT_APP_PERFECT_CHANNEL_ENDPOINT;

    useEffect(()=>{
      const getTaks = async () =>{
        const { data } = await axios.get(`${endpoint}/Tasks`);
        
        return data;
      }

      setData(getTaks());

    },[])


    return (
        <div>

        </div>
    )

}

export default Home;