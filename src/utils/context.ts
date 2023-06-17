import { createContext } from 'react'
import { WeatherResult } from './weather'

export const weatherContext = createContext<WeatherResult>({
  temperature: [],
  rain: [],
  time: []
})
