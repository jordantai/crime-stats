import axios from 'axios';

const policeApiRequest = axios.create({
  baseURL: 'https://data.police.uk/api',
});

// Bury 53.5842068,-2.3702053

export const fetchCrimes = async (monthAndYear: string) => {
  try {
    // const { data } = await policeApiRequest.get(
    //   `/crimes-street/all-crime?poly=53.453147,-2.165044:53.414774,-1.992847:53.357682,-2.067762:53.328243,-2.154755:53.396097,-2.247171&date=${monthAndYear}`
    // );
    const { data } = await policeApiRequest.get(
      `/crimes-street/all-crime?lat=53.5927543&lng=-2.2972827&date=${monthAndYear}`
    );
    return data;
  } catch (error) {
    console.log('error', error);
  }
};

const openmapsApiRequest = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/search.php',
});

export const fetchMapAreaData = async () => {
  try {
    const { data } = await openmapsApiRequest.get(
      `?q=bury%2C+greater+manchester&polygon_geojson=1&format=json`
    );
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
