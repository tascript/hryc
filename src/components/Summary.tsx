import { useContext } from 'react'
import { weatherContext } from '../utils/context'
import styles from '~/assets/css/Summary.module.css'
import { getHours } from 'date-fns'

function Summary() {

  const weather = useContext(weatherContext)
  let tempature = 0
  let rain = 0
  for (let i = 0; i < weather.time.length; i++) {
    if (getHours(new Date(weather.time[i])) === getHours(new Date())) {
      tempature = weather.temperature[i]
      rain = weather.rain[i]
      break
    }
  }

  return (
    <>
      <h1>hryc</h1>
      <div className={styles.card}>
        <p>hryc is daily weather report in Fukuoka City.</p>
        <p>tempature: <span className={styles.figure}>{tempature}</span> °C</p>
        <p>rain: <span className={styles.figure}>{rain}</span> mm/sec</p>
      </div>
    </>
  )
}

export default Summary
