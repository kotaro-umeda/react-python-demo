import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { TextContext } from "../providers/textProvider";
import { CityList } from "../uiParts/cityList";
import axios from "axios";
import { Button } from "../uiParts/button";

function Weather() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { city } = useContext<any>(TextContext);
  const cityInfo = CityList.filter((info) => {
    return info.name == city;
  });
  const url = "http://127.0.0.1:8000/weather";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo[0].lat}&lon=${cityInfo[0].lon}&units=metric&appid=c153b1cd0098ea15b065f067b3e9ad3f`,
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);
  
  const postData = () => {
    axios.post(url, {
      date: dayjs(data.ts).format("YYYY-MM-DD"),
      city: cityInfo[0].name,
      weather: data.weather[0].main,
      temperature: data.main.temp,
      humidity: data.main.humidity,
    });
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      ) : (
        <div className="p-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-300
                  w-96 h-56 m-auto rounded-xl shadow-2xl 
                  transform hover:scale-110 transition-transform
                  text-white relative"
          >
            <div className="w-full px-8 absolute top-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-light">City Name</p>
                  <p className="text-lg font-medium tracking-widest">{cityInfo[0].name}</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-light">Weather Condition</p>
                <p className="text-lg font-medium tracking-widest">{data.weather[0].main}</p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-light text-xs">Date</p>
                    <p className="font-bold tracking-more-wider text-sm">
                      {dayjs(data.ts).format("YYYY-MM-DD")}
                    </p>
                  </div>
                  <div>
                    <p className="font-light text-xs">Temprature</p>
                    <p className="font-bold tracking-more-wider text-sm">{data.main.temp}°C</p>
                  </div>
                  <div>
                    <p className="font-light text-xs">Humidity</p>
                    <p className="font-bold tracking-more-wider text-sm">{data.main.humidity}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <Button clickFunc={postData}>Post</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
