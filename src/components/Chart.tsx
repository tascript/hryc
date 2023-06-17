import { useContext } from 'react'
import { makeData } from '../utils/chart'
import { weatherContext } from '../utils/context'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'


function Chart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  const result = useContext(weatherContext)

  return (
    <Line data={makeData(result)} />
  )
}

export default Chart
