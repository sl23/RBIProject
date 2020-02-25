import React, { useContext } from "react"
import nightIcon from "../assets/animated/night.svg"
import dayIcon from "../assets/animated/day.svg"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"
import cloudDay from "../assets/animated/cloudy-day.svg"
import cloudyNight from "../assets/animated/cloudy-night.svg"
import rain1 from "../assets/animated/rainy-1.svg"
import rain2 from "../assets/animated/rainy-2.svg"
import rain7 from "../assets/animated/rainy-7.svg"
import rain6 from "../assets/animated/rainy-6.svg"
import snow from "../assets/animated/snowy-5.svg"
import thunderstorm from "../assets/animated/thunder.svg"
import CenteringDiv from "./styledComponents/CenteringDiv"
import WeatherIcon from "./styledComponents/WeatherIcon"
import WeatherContext from "./WeatherContext"

<<<<<<< HEAD:client/src/components/EngWeather.js
const EngWeather = () => {
  const { weatherData } = useContext(WeatherContext)

=======
const Weather = ({ language }) => {
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
>>>>>>> 3c7a4ad0535119f4709db491a9a44b009b875625:client/src/components/Weather.js
  const time = new Date()
  const hour = time.getHours()

<<<<<<< HEAD:client/src/components/EngWeather.js
  if (!weatherData) return <div>Loading...</div>
  let iconCode = weatherData.weather[0].icon
=======
  if (!data) {
    if (language === "fr") {
      return <div>Chargement...</div>
    } else {
      return <div>Loading...</div>
    }
  }
  let iconCode = data.weather[0].icon
>>>>>>> 3c7a4ad0535119f4709db491a9a44b009b875625:client/src/components/Weather.js
  let iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png"
  let main = weatherData.weather[0].main
  let description = weatherData.weather[0].description

  return (
    <CenteringDiv>
<<<<<<< HEAD:client/src/components/EngWeather.js
      <BrownSofiaPro>
        Today's Forecast:<span> </span>
        {description}
      </BrownSofiaPro>
=======
      {language === "en" ? (
        <BrownSofiaPro>
          Today's Forecast:<span> </span>
          {data.weather[0].description}
        </BrownSofiaPro>
      ) : (
        false
      )}
>>>>>>> 3c7a4ad0535119f4709db491a9a44b009b875625:client/src/components/Weather.js
      {(function() {
        if (main === "Clear" && hour < 18 && hour > 6) {
          return <WeatherIcon src={dayIcon} />
        } else if (main === "Clear" && hour > 18) {
          return <WeatherIcon src={nightIcon} />
        } else if (main === "Clear" && hour > 0 && hour < 6) {
          return <WeatherIcon src={nightIcon} />
        } else if (main === "Clouds" && hour < 18 && hour > 6) {
          return <WeatherIcon src={cloudDay} />
        } else if (main === "Clouds" && hour > 18) {
          return <WeatherIcon src={cloudyNight} />
<<<<<<< HEAD:client/src/components/EngWeather.js
        } else if (description === "light rain") {
          return <WeatherIcon src={rain1} />
        } else if (description === "moderate rain") {
          return <WeatherIcon src={rain2} />
        } else if (description === "heavy rain") {
          return <WeatherIcon src={rain6} />
        } else if (description === "extreme rain") {
=======
        } else if (main === "Rain" && iconCode === 500) {
          return <WeatherIcon src={rain1} />
        } else if (main === "Rain" && iconCode === 501) {
          return <WeatherIcon src={rain2} />
        } else if (main === "Rain" && iconCode === 503) {
          return <WeatherIcon src={rain6} />
        } else if (main === "Rain" && iconCode === 504) {
>>>>>>> 3c7a4ad0535119f4709db491a9a44b009b875625:client/src/components/Weather.js
          return <WeatherIcon src={rain7} />
        } else if (main === "Snow") {
          return <WeatherIcon src={snow} />
        } else if (main === "Thunderstorm") {
          return <WeatherIcon src={thunderstorm} />
        } else {
          return <WeatherIcon src={iconURL} />
        }
      })()}
    </CenteringDiv>
  )
}

export default Weather
