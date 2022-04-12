import { WEATHER_DATA_RECIEVED } from './weather.actions';

const initialData = {
  weatherList: [],
};

export const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECIEVED:
      return {
        ...state,
        weatherList: action.payload.weatherData,
      };
    default:
      return state;
  }
};