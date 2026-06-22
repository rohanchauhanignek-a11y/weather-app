
import axios from 'axios';
const API_KEY = '1df03e861e3add46939ba3e384f37f61';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const getHourlyForecast = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};