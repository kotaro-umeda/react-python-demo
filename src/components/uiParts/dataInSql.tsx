type props = {
  cityName: string;
  weather: string;
  date: string;
  temperature: number;
  humidity: number;
};
function DataInSql(props: props) {
  const { cityName, weather, date, temperature, humidity } = props;
  return (
    <>
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
                <p className="text-lg font-medium tracking-widest">{cityName}</p>
              </div>
            </div>
            <div className="pt-2">
              <p className="font-light">Weather Condition</p>
              <p className="text-lg font-medium tracking-widest">{weather}</p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-light text-xs">Date</p>
                  <p className="font-bold tracking-more-wider text-sm">{date}</p>
                </div>
                <div>
                  <p className="font-light text-xs">Temprature</p>
                  <p className="font-bold tracking-more-wider text-sm">{temperature}°C</p>
                </div>
                <div>
                  <p className="font-light text-xs">Humidity</p>
                  <p className="font-bold tracking-more-wider text-sm">{humidity}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataInSql;
