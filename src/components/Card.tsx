import { useState, useEffect } from "react";
import { useImagePath } from "../hooks/useImagePath"
import useTime from "../hooks/useTime"

interface Props {
  city: string,
  timezone: string,
  name: string,
}

interface WeatherData {
  weather: [{
    main: string
  }],
  main: {
    temp: number
  }
}

export default function Card(props: Props) {

  const { city, timezone, name } = props

  const time = useTime(timezone)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        console.log(`Weather data for ${city}:`, data);
        if (!data.weather || !Array.isArray(data.weather) || data.weather.length === 0) {
          console.error(`Invalid weather data structure for ${city}:`, data);
          return;
        }
        setWeatherData(data);
      } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const mainWeatherCondition = weatherData?.weather?.[0]?.main || 'Clear';
  const temp = weatherData?.main?.temp || '';

  return (
    <div className="border-[5px] rounded-2xl border-black bg-white">

      <div className="p-4 w-full flex justify-between border-b-[5px] border-black text-2xl font-bold tracking-tight">
        <div>{city}</div>
        <div>{time}</div>
      </div>

      <div>
        <img
          src={useImagePath(name, mainWeatherCondition)}
          alt={'face'}
        />
      </div>

      <div className="p-4 w-full tracking-tight flex gap-2 justify-center border-t-[5px] border-black text-3xl font-bold">
        <span>{temp && `${Math.round(temp)}°C`}</span>
        <span>{mainWeatherCondition}</span>
      </div>

    </div>
  )
}