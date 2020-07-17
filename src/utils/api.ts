import axios from 'axios';

const apiRequest = axios.create({
  baseURL: 'https://data.police.uk/api',
});

export const fetchCrimes = async () => {
  try {
    const { data } = await apiRequest.get(
      '/crimes-street/all-crime?poly=53.453147,-2.165044:53.414774,-1.992847:53.357682,-2.067762:53.328243,-2.154755:53.396097,-2.247171&date=2019-10'
    );
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
