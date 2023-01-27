import { useState, useEffect } from "react";
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Currentdata from '../components/Currentdata/Currentdata';
import Temperature from '../components/Temperature/Temperature';
import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather/?q=";
const API_KEY = "";

const Weather: React.FC = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState<string>('Las Palmas');

  const getWeather = async (city: string) => {
    try {
      const response = await axios.get((BASE_URL + city + API_KEY));
      setWeather(response.data);
      setError(null);
    } catch (err) {
      JSON.stringify(err);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather(city);
  }, []);

  useEffect(() => {
    if (city) {
      getWeather(city);
    }
  }, [city]);

  return (
    <>
      <Button setCity={setCity} />
      <Input setCity={setCity} />
      {loading && <div>A moment please...</div>}
      {error && <div>There is a problem fetching the post weather - ${error}</div>}
      {weather && (
        <div>
          <Currentdata data={weather} />
          <Temperature data={weather} />
        </div>
      )}
    </>
  )
};

export default Weather;