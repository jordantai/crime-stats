import axios from 'axios';

const policeApiRequest = axios.create({
  baseURL: 'https://data.police.uk/api',
});

// Bury 53.5842068,-2.3702053

export const fetchCrimes = async (monthAndYear: string, mapCoords: string) => {
  try {
    const { data } = await policeApiRequest.get(
      `/crimes-street/all-crime?poly=${mapCoords}&date=${monthAndYear}`
    );
    return data;
  } catch (error) {
    console.log('error', error);
  }
};

const openmapsApiRequest = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/search.php',
});

// export const fetchMapAreaData = async () => {
//   try {
//     const { data } = await openmapsApiRequest.get(
//       `?q=bury%2C+greater+manchester&polygon_geojson=1&format=json`
//     );
//     return data;
//   } catch (error) {
//     console.log('error', error);
//   }
// };

// fetchMapAreaData().then((data) => {
//   const formattedData = formatPolyData(data[0].geojson.coordinates[0]);
//   console.log(formattedData);
//   return formattedData;
// });
