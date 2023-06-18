import { WeatherResult } from './weather'
import type { ChartData, Point } from 'chart.js/auto'
import { getHours } from 'date-fns'

export function makeData(arg: WeatherResult): ChartData<"line", (number | Point | null)[], unknown> {
  return {
    labels: arg.time.map(t => getHours(new Date(t))),
    datasets: [
      {
        label: 'temperature',
        data: arg.temperature,
        borderColor: '#c94913'
      },
      {
        label: 'rain',
        data: arg.rain,
        borderColor: '#376b83'
      }
    ]
  }
}
