export const weather = async () => {
  const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=33.60&longitude=130.42&hourly=temperature_2m,rain&forecast_days=3')
  return res.json()
}
