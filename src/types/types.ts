// src/types/weather.ts

// Clima actual
export interface CurrentWeather {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: { text: string; icon: string };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
  };
}

// Pronóstico
export interface ForecastWeather {
  location: {
    name: string;
    country: string;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: { text: string; icon: string };
      };
      hour: {
        time: string;
        temp_c: number;
        condition: { text: string; icon: string };
      }[];
    }[];
  };
}

// Búsqueda de ciudades
export interface SearchResult {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
