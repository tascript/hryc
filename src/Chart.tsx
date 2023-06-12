import { useState, useEffect } from 'react'
import { weather } from './utils/weather'
import { makeData } from './utils/chart'
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
  const [data, setData] = useState(makeData(
    {
      temperature: [],
      rain: [],
      time: []
    }
  ))
  useEffect(() => {
    const setup = async () => {
      const res = await weather()
      setData(makeData(res))
    }
    setup()
    return () => {
      setData(makeData(
        {
          temperature: [],
          rain: [],
          time: []
        }
      ))
    }
  }, [])



  return (
    <Line data={data} />
  )
}

export default Chart
