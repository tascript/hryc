import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Chart from './chart.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Chart />
  </React.StrictMode>,
)
