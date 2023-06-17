import styles from '~/assets/css/App.module.css'
import Chart from './Chart.tsx'

function App() {

  return (
    <>
      <h1>hryc</h1>
      <div className={styles.card}>
        <p>
          hryc is daily weather report in Fukuoka City.
        </p>
      </div>
      <Chart />
    </>
  )
}

export default App
