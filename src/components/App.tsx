import Summary from './Summary.tsx'
import Chart from './Chart.tsx'
import Provider from './Provider.tsx'

function App() {

  return (
    <Provider>
      <Summary />
      <Chart />
    </Provider>
  )
}

export default App
