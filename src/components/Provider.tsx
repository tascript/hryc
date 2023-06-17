import {
  useState,
  useEffect,
  FC
} from 'react'
import { weather, WeatherResult } from '../utils/weather'
import { weatherContext } from '~/utils/context'

interface props {
  children: React.ReactNode
}

const Provider: FC<props> = ({ children }) => {

  const [data, setData] = useState<WeatherResult>(
    {
      temperature: [],
      rain: [],
      time: []
    })

  useEffect(() => {
    const setup = async () => {
      const res = await weather()
      setData(res)
    }
    setup()
    return () => {
      setData((
        {
          temperature: [],
          rain: [],
          time: []
        }
      ))
    }
  }, [])

  return (
    <weatherContext.Provider value={data}>
      {children}
    </weatherContext.Provider>
  )
}

export default Provider
