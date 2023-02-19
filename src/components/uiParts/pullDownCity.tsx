import { ChangeEvent, useContext } from "react";
import { TextContext } from "../providers/textProvider";
import { CityList } from "./cityList";

export const PullDownCity = () => {
  const { setCity } = useContext(TextContext);
  const changeCity = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };
  return (
    <div className="md:w-96 my-2 w-60">
      <label
        htmlFor="countries"
        className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        onChange={changeCity}
      >
        <option selected>Choose a city</option>
        {CityList.map((cityInfo) => {
          return (
            <option key={cityInfo.name} value={cityInfo.name}>
              {cityInfo.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
