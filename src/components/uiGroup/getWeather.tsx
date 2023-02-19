import React, { useContext, useEffect, useState } from "react";
import { TextContext } from "../providers/textProvider";
import { Button } from "../uiParts/button";
import Demo from "../uiParts/demo";
import { PullDownCity } from "../uiParts/pullDownCity";
import Weather from "./weather";
import axios from "axios";
import dayjs from "dayjs";
import DataInSql from "../uiParts/dataInSql";

export const GetWeather: React.FC = () => {
  const [text, setText] = useState("Get Current Weather");
  const [weatherData, setWeatherData] = useState();
  const [getWeather, setGetWeather] = useState<boolean>(false);
  const [dataInSql, setDataInSql] = useState<boolean>(false);
  const url = "http://127.0.0.1:8000/weather";
  const date = dayjs().format("YYYY-MM-DD");
  const { city } = useContext(TextContext);
  useEffect(() => {
    axios.get(url).then((res) => {
      setWeatherData(res.data);
    });
  }, []);
  const cityData = weatherData?.find((data: any) => {
    return data.city == city && data.date == date;
  });

  const getWeatherInfo = () => {
    if (!getWeather) {
      setGetWeather(!getWeather);
      console.log(cityData);
      if (cityData) {
        setDataInSql(true);
      }
      setText("Retry");
    } else {
      setGetWeather(!getWeather);
      setText("Get Current Weather");
      setDataInSql(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {getWeather ? (
        dataInSql ? (
          <DataInSql
            cityName={cityData.city}
            weather={cityData.weather}
            date={cityData.date}
            temperature={cityData.temperature}
            humidity={cityData.humidity}
          />
        ) : (
          <Weather />
        )
      ) : (
        <PullDownCity />
      )}
      <Button clickFunc={getWeatherInfo}>{text}</Button>
    </div>
  );
};
