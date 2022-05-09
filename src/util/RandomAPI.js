import axios from 'axios';

/** Fetch random numbers from the Random.org Integers API */

export const getAnswer = async () => {
  try {
    const response = await axios.get(`https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`);
    if (response.status === 200) {
      const data = response.data.replace(/\s+/g, '').split(''); // Remove spaces and line breaks
      console.log(data);
      return data;
    }
  } 
  catch (error) {
    console.error(error);
    console.error('No dice bro');
    return ['6', '4', '2', '1'];
  } 
}