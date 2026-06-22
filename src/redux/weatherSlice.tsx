import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    city: "Mahuva",
    history: (() => {
      const item = localStorage.getItem("history");
      return item ? JSON.parse(item) : [];
    })(),
  },
  reducers: {
    setWeatherData(state, action) {
      state.weatherData = action.payload;

      const cityName = action.payload.name;
      state.history = state.history.filter((item:any) => item.name !== cityName);
      state.history.unshift(action.payload);
      state.history = state.history.slice(0, 5);
      localStorage.setItem("history", JSON.stringify(state.history));
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    clearAll(state) {
      state.history = [];
      localStorage.removeItem("history");
    },
  },
});

export const { setWeatherData,setCity,clearAll } = weatherSlice.actions;
export default weatherSlice.reducer;