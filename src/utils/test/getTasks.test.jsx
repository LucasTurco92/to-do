import axios from 'axios';
import getTasks from '../getTasks';
jest.mock('axios');

test('when it invokes the axios, should get a valid response', ()=>{
    const response = {
      data: {
        tasks:[]
      }
    }

  axios.get.mockResolvedValue(response);
  
  const tasks  = getTasks();
  
  expect(tasks).not.toBeNull();
});