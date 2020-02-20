import React, { useState, useEffect } from "react"

const Weather = () => {
  const [data, setData] = useState(null)

  async function fetchData() {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=e9f0e581ccb5c2ab0d655878c8cdc745"
    )
    res
      .json()
      .then(res => setData(res))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data) return <div>Loading...</div>
  let iconCode = data.weather[0].icon
  let iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png"
  return (
    <div>
      {data.weather[0].description}
      <img src={iconURL} />
    </div>
  )
}

export default Weather
