import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: null,
    city:"Mahuva"
  },
  reducers: {
    setWeatherData(state, action) {
      state.weatherData = action.payload;
    },
    setCity(state,action){
      state.city = action.payload;
    }
  },
});

export const { setWeatherData,setCity } = weatherSlice.actions;
export default weatherSlice.reducer;