/// <reference types="astro/client" />

// Tipos globales para eventos personalizados
import type { CurrentWeather } from './types/types';

declare global {
  interface WindowEventMap {
    'weather-data': CustomEvent<CurrentWeather>;
  }
}

export {};
