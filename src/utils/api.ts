import axios from 'axios';

const policeApiRequest = axios.create({
  baseURL: 'https://data.police.uk/api',
});

export const fetchCrimes = async (monthAndYear: string, mapCoords: string) => {
  const { data } = await policeApiRequest.get(
    `/crimes-street/all-crime?poly=${mapCoords}&date=${monthAndYear}`
  );
  return data;
};

export const fetchNeighbourhoodCoords = async () => {
  try {
    const { data } = await policeApiRequest.get(
      `/greater-manchester/JC27/boundary`
    );
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
