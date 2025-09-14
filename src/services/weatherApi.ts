import type { CurrentWeather, ForecastWeather, SearchResult } from "@/types/types";

const API_KEY = import.meta.env.PUBLIC_WEATHERAPI_KEY;
// const API_KEY = "38cfd12fb3ab4057926210748251009";
const BASE_URL = "https://api.weatherapi.com/v1";

async function fetchFromAPI<T>(endpoint: string, params: Record<string, string | number>): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}.json`);
  url.search = new URLSearchParams({
    ...Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)])),
    key: API_KEY,
    lang: "es", // para respuestas en español
  }).toString();

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Error en la API: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

// Clima actual por ciudad
export async function getCurrentWeather(city: string): Promise<CurrentWeather> {
  return fetchFromAPI<CurrentWeather>("current", { q: city });
}

// Pronóstico (ejemplo: 3 días)
export async function getForecast(city: string, days = 3): Promise<ForecastWeather> {
  return fetchFromAPI<ForecastWeather>("forecast", { q: city, days });
}

// Búsqueda de ciudades
export async function searchCity(query: string): Promise<SearchResult[]> {
  return fetchFromAPI<SearchResult[]>("search", { q: query });
}
