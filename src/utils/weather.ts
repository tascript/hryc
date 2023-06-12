interface WeatherRawData {
  hourly: {
    temperature_2m: number[],
    rain: number[]
    time: string[]
  }
}

export interface WeatherResult {
  temperature: number[]
  rain: number[]
  time: string[]
}

export async function weather() {
  const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=33.60&longitude=130.42&hourly=temperature_2m,rain&forecast_days=1&timezone=Asia%2FTokyo')
  const report = await res.json() as WeatherRawData
  const temperature = report.hourly.temperature_2m
  const rain = report.hourly.rain
  const time = report.hourly.time

  const result: WeatherResult = {
    temperature,
    rain,
    time
  }

  return result
}
