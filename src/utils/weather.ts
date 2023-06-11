interface WeatherRawData {
  hourly: {
    temperature_2m: number[],
    time: string[]
  }
}

export interface WeatherResult {
  temperature: number
  time: string
}

export const weather = async () => {
  const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=33.60&longitude=130.42&hourly=temperature_2m,rain&forecast_days=3')
  const report = await res.json() as WeatherRawData
  const temps = report.hourly.temperature_2m
  const times = report.hourly.time

  let result: WeatherResult[] = []
  if (temps.length === times.length) {
    for (let i = 0; i < temps.length; i++) {
      result.push({
        temperature: temps[i],
        time: times[i]
      })
    }
  }

  return result
}
