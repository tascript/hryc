import { WeatherResult } from './weather'
import type { ChartData, Point } from 'chart.js/auto'

export function makeData(arg: WeatherResult): ChartData<"line", (number | Point | null)[], unknown> {
  return {
    labels: arg.time,
    datasets: [
      {
        label: '気温',
        data: arg.temperature,
      }
    ]
  }
}
